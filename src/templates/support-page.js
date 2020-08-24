import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroImage from "../components/Hero/HeroImage";
import HeroText from "../components/Hero/HeroText";
import HTMLContent from "../components/Content";

export const SupportPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
}) => {
  const PageContent = contentComponent;

  return (
    <div className="support-page">
      <HeroImage image={image} />
      <HeroText heading={title} />
      <div className="container mb-6">
        <div className="columns is-mobile">
          <div className="column is-10 is-offset-1">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

SupportPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

const SupportPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;
  const { footerData, navbarData } = data;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <SupportPageTemplate
        image={page.frontmatter.image}
        title={page.frontmatter.title}
        contentComponent={HTMLContent}
        content={page.html}
      />
    </Layout>
  );
};

SupportPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SupportPage;

export const SupportPageQuery = graphql`
  query SupportPage($id: String!) {
    ...LayoutFragment
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
  }
`;
