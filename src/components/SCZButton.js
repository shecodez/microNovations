import React from "react";
import PropTypes from "prop-types";

const SCZButton = ({ text }) => {
  return (
    <div>
      <button className="button icon-btn">+</button>
      <button className="button secondary-btn">{text}</button>
    </div>
  );
};

SCZButton.propTypes = {
  text: PropTypes.string,
};

export default SCZButton;
