import React from "react";
import PropTypes from "prop-types";
import { ServicePostTemplate } from "../../templates/service-post";

const ServicePostPreview = ({ entry, widgetFor }) => {
  return (
    <ServicePostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
    />
  );
};

ServicePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ServicePostPreview;
