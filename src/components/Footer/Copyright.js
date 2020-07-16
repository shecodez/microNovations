import React from "react";

import useSiteMetadata from "../SiteMetadata";

const Copyright = () => {
  const { title } = useSiteMetadata();
  return (
    <div className="footer-text sub-footer">
      <p className="copyright paragraph-3">{` © ${new Date().getFullYear()} ${title}`}</p>
      <button>Top</button>
    </div>
  );
};

export default Copyright;
