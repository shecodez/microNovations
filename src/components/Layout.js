import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../scss/styles.scss";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({
  footerData = null,
  navbarData = null,
  children,
}) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta name="keywords" content="IT Cloud Solutions microNovations LLC" />
      </Helmet>
      <Navbar data={navbarData} />
      <main>{children}</main>
      <Footer data={footerData} />
    </React.Fragment>
  );
};

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            brandLogo {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;

/*
logoBrand {
  image
  imageAlt
}
*/
