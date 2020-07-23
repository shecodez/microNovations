import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../layouts/MainLayout";
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
  <main>
    <HeroImage image={image} />
    <HeroText heading={hero.heading} text={hero.text} action={hero.action} />
    <OurServices services={services} />
    <Testimonials testimonials={testimonials} />
    <CTA heading={cta.heading} text={cta.text} action={cta.action} />
  </main>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hero: PropTypes.object,
  services: PropTypes.object,
  testimonials: PropTypes.array,
  cta: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout bodyClass="home-page">
      <IndexPageTemplate
        image={frontmatter.image}
        hero={frontmatter.hero}
        services={frontmatter.services}
        testimonials={frontmatter.testimonialsx}
        cta={frontmatter.cta}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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

        testimonialsx {
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
      }
    }
  }
`;
