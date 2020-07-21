import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ServiceItem = ({ service }) => {
  const { title, description, link } = service;
  return (
    <article className="service">
      <h5 className="heading-5">{title}</h5>
      <p className="paragraph-2">{description}</p>
      <Link to={link.href}>
        <span>+ {link.text}</span>
      </Link>
      <div className="scz-border-frame"></div>
    </article>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.shape({
    herf: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default ServiceItem;
