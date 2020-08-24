import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ text }) => {
  return (
    <div>
      <button className="button icon-btn">+</button>
      <button className="button secondary-btn">{text}</button>
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
};

export default CustomButton;
