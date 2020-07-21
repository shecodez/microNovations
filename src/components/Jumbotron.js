import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ header, paragraph }) => (
  <div className="jumbotron">
    <h3 className="heading-3">{header}</h3>
    <div className="columns">
      <div className="column is-one-fifth">
        <span className="scz-line"></span>
      </div>
      <div className="column">
        <p className="paragraph-2">{paragraph}</p>
      </div>
    </div>
  </div>
);

Jumbotron.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Jumbotron;
