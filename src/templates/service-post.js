import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";

export const ServicePostTemplate = ({ content, contentComponent, title }) => {
  const ServiceContent = contentComponent;

  return (
    <div className="service-post-page">
      <div className="hero is-primary"></div>
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
    </div>
  );
};

ServicePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
};

const ServicePost = ({ data }) => {
  const { markdownRemark: post } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = post;
  const { footerData, navbarData } = data;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <ServicePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
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
    ...LayoutFragment
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
      }
    }
  }
`;
