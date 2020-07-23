import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../layouts/MainLayout";
import HeroImage from "../components/Hero/HeroImage";
import HeroText from "../components/Hero/HeroText";
import Content, { HTMLContent } from "../components/Content";

export const WhyChooseUsPageTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <main>
      <HeroImage image={image} />
      <HeroText heading={title} />
      <div className="container mb-6">
        <div className="columns is-mobile">
          <div className="column is-10 is-offset-1">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </main>
  );
};

WhyChooseUsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const WhyChooseUsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout bodyClass="why-choose-us-page">
      <WhyChooseUsPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        content={post.html}
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
