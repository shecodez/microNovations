import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HeroImage from "../components/Hero/HeroImage";
import HeroText from "../components/Hero/HeroText";
import HTMLContent from "../components/Content";

export const WhyChooseUsPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
}) => {
  const PageContent = contentComponent;

  return (
    <div className="why-choose-us-page">
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

WhyChooseUsPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

const WhyChooseUsPage = ({ data }) => {
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
      <WhyChooseUsPageTemplate
        contentComponent={HTMLContent}
        content={page.html}
        image={page.frontmatter.image}
        title={page.frontmatter.title}
      />
    </Layout>
  );
};

WhyChooseUsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhyChooseUsPage;

export const WhyChooseUsPageQuery = graphql`
  query WhyChooseUsPage($id: String!) {
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
