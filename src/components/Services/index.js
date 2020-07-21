import React from "react";
import PropTypes from "prop-types";

import ServiceList from "./ServiceList";

const OurServices = ({ services }) => (
  <section id="our-services" className="our-services-section">
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h3 className="heading-3">{services.heading}</h3>
          <p className="paragraph-2">{services.subheading}</p>
        </div>
      </div>
    </div>

    <div className="service-list container">
      <ServiceList services={services.list} />
    </div>
  </section>
);

OurServices.propTypes = {
  services: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.object,
      })
    ),
  }),
};

export default OurServices;
