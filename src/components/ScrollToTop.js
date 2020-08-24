import React from "react";

import downChevronSVG from "../img/down-chevron.svg";

const scroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTop = () => (
  <button className="button icon-btn page-top" onClick={scroll}>
    <img src={downChevronSVG} alt="Page Top" />
  </button>
);

export default ScrollToTop;
