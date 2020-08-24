import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroImage from "../components/Hero/HeroImage";
import HeroText from "../components/Hero/HeroText";
import OurServices from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export const IndexPageTemplate = ({
  image,
  hero,
  services,
  testimonials,
  cta,
}) => (
  <div className="home-page">
    <HeroImage image={image} />
    <HeroText heading={hero.heading} text={hero.text} action={hero.action} />
    <OurServices services={services} />
    <Testimonials testimonials={testimonials} />
    <CTA heading={cta.heading} text={cta.text} action={cta.action} />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hero: PropTypes.object,
  services: PropTypes.object,
  testimonials: PropTypes.array,
  cta: PropTypes.object,
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = data.markdownRemark;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <IndexPageTemplate
        image={frontmatter.image}
        hero={frontmatter.hero}
        services={frontmatter.services}
        testimonials={frontmatter.testimonials}
        cta={frontmatter.cta}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    ...LayoutFragment
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        hero {
          heading
          text
          action {
            text
            link
          }
        }

        services {
          heading
          subheading
          list {
            title
            description
            link {
              text
              href
            }
          }
        }

        testimonials {
          quote
          author {
            name
            title
          }
        }

        cta {
          heading
          text
          action {
            text
            button
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
