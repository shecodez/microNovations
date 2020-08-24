import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "../Jumbotron";
import CustomButton from "../CustomButton";

const CTA = ({ heading, text, action }) => {
  return (
    <section className="cta section">
      <div className="container">
        <div>
          <Jumbotron header={heading} paragraph={text} />
          <div className="is-pulled-right">
            <CustomButton text={action.text} />
          </div>
        </div>
      </div>
    </section>
  );
};

CTA.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default CTA;
