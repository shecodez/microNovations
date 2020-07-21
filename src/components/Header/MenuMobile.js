import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import SocialBar from "../SocialBar";

const MenuMobile = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;

  return (
    <div
      className={`main-menu-mobile is-hidden-tablet ${
        props.isActive ? "is-open" : ""
      }`}
    >
      <nav id="main-menu-mobile">
        <ul>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialBar orientation="horizontal" />
    </div>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={(data) => <MenuMobile isActive={props.isActive} data={data} />}
  />
);
