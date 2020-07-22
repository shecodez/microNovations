import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ServiceItem = ({ service }) => {
  const { title, description, link } = service;
  return (
    <article className="service">
      <span className="scz-border-frame"></span>
      <h5 className="heading-5">{title}</h5>
      <p className="paragraph-2">{description}</p>
      <Link to={link.href}>
        <span>+ {link.text}</span>
      </Link>
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
