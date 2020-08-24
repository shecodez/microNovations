const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    // Filter out the footer, navbar, and services so we don't create pages for those
    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      switch (edge.node.frontmatter.templateKey) {
        case "navbar":
        case "footer":
          return false;

        default:
          return true; //!Boolean(edge.node.fields.slug.match(/^\/services\/.*$/));
      }
    });

    postOrPage.forEach((edge) => {
      let component, pathname;
      if (edge.node.frontmatter.templateKey === "home-page") {
        pathname = "/";
        component = path.resolve(`src/pages/index.js`);
      } else {
        pathname = edge.node.frontmatter.path || edge.node.fields.slug;
        component = path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        );
      }
      const id = edge.node.id;
      createPage({
        path: pathname,
        tags: edge.node.frontmatter.tags,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// console warning: react-🔥-dom patch is not detected
// https://stackoverflow.com/a/62927747
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};
