import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "../Jumbotron";
import SCZButton from "../SCZButton";

const HeroText = ({ heading, text, action }) => {
  return (
    <section className="hero-text-section">
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <Jumbotron header={heading} paragraph={text} />
            <div className="is-pulled-right">
              <SCZButton text={action.text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroText.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default HeroText;
