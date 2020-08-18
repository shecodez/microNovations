import React from "react";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../scss/style.scss";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <SEO />
      <div className={`page ${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainLayout;

/*
const { title, description = 'nothin’', image, path, article = false } = props.seo
<SEO
  title={post.frontmatter.title}
  description={post.frontmatter.description || post.excerpt || 'nothin’'}
  image={post.frontmatter.image.childImageSharp.sizes.src}
  pathname={post.fields.slug}
  article
/>
*/
