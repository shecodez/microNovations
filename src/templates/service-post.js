import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../layouts/MainLayout";
import Content, { HTMLContent } from "../components/Content";

export const ServicePostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ServiceContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <div class="hero is-primary"></div>
      <div className="container mb-4">
        <div className="columns is-centered is-mobile">
          <div className="column is-10">
            <div className="service-jumbotron">
              <div className="scz-border-frame"></div>
              <h2 className="heading-2">{title}</h2>
            </div>
            <div className="columns">
              <div className="column">
                <span className="scz-line"></span>
              </div>
              <div className="column is-10 paragraph-2">
                <ServiceContent className="content mb-4" content={content} />
                <Link to="/#our-services">{`< Back`}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

ServicePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  helmet: PropTypes.object,
};

const ServicePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout bodyClass="service-post-page">
      <ServicePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Our Services">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

ServicePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ServicePost;

export const pageQuery = graphql`
  query ServicePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
