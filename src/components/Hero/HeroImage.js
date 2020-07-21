import React from "react";
import PropTypes from "prop-types";

const HeroImage = ({ image }) => {
  return (
    <section className="hero-image-section columns is-gapless">
      <div className="column is-10">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        ></div>
      </div>
      <div className="column"></div>
    </section>
  );
};

HeroImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default HeroImage;
