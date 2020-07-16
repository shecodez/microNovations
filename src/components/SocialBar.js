import React from "react";

import facebook from "../img/social/facebook.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";

const SocialBar = () => (
  <ul>
    <li>
      <a title="facebook" href="https://facebook.com">
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: "1em", height: "1em" }}
        />
      </a>
    </li>
    <li>
      <a title="twitter" href="https://twitter.com">
        <img
          className="fas fa-lg"
          src={twitter}
          alt="Twitter"
          style={{ width: "1em", height: "1em" }}
        />
      </a>
    </li>
    <li>
      <a title="linkedin" href="https://linkedin.com">
        <img
          src={linkedin}
          alt="Linkedin"
          style={{ width: "1em", height: "1em" }}
        />
      </a>
    </li>
  </ul>
);

export default SocialBar;
