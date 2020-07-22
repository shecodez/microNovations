import React from "react";
import PropTypes from "prop-types";

import { SupportPageTemplate } from "../../templates/support-page";

const SupportPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <SupportPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

SupportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default WhyChooseUsPagePreview;
