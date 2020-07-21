import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

import ServiceItem from "./ServiceItem";

const ServiceList = (props) => {
  const services = props.services.map((service, i) => {
    return (
      <div key={v4()} className="column is-one-third">
        <ServiceItem service={service} />
      </div>
    );
  });
  return (
    <div className="columns is-multiline is-variable is-6">{services}</div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.object,
    })
  ),
};

export default ServiceList;
