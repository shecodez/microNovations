import React from "react";

import facebook from "../images/social/facebook.svg";
import linkedin from "../images/social/linkedin.svg";
import twitter from "../images/social/twitter.svg";

const SocialBar = ({ orientation = "vertical", fixed = false }) => (
  <div className={`social-bar ${fixed ? "is-fixed" : ""} ${orientation}`}>
    <ul>
      <li>
        <a title="facebook" href="https://facebook.com">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a title="twitter" href="https://twitter.com">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a title="linkedin" href="https://linkedin.com">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialBar;
