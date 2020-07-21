import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import SocialBar from "../SocialBar";

const Menu = ({ data }) => {
  const { menuLinks } = data.site.siteMetadata;

  return (
    <div className="main-menu is-hidden-mobile">
      <nav id="main-menu">
        <ul>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialBar fixed />
    </div>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => <Menu data={data} />}
  />
);
