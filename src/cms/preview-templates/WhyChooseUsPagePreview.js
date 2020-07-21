import React from "react";
import PropTypes from "prop-types";

import { WhyChooseUsPageTemplate } from "../../templates/why-choose-us-page";

const WhyChooseUsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <WhyChooseUsPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

WhyChooseUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default WhyChooseUsPagePreview;
