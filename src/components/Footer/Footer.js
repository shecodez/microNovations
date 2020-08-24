import React from "react";

import contactInfo from "../../../site/settings/contact_info.json";
import ContactForm from "../Contact/Form";
import ScrollToTop from "../ScrollToTop";

export const FooterTemplate = ({ data }) => {
  const { email, phone } = contactInfo;
  const { street, city, state, zipCode } = contactInfo.address;

  return (
    <footer className="footer">
      <div className="container">
        <ContactForm />
        <div className="level mt-5 mx-5 paragraph-2 has-text-centered-mobile">
          <div className="address">
            Address.{" "}
            <address>{`${street} ${city} ${state} ${zipCode}`}</address>
          </div>
          <p className="tel">Tel. {phone}</p>
          <p className="email">
            Email. <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className="level mt-5 mx-5 has-text-centered-mobile">
          <p className="copyright paragraph-3">{`© ${new Date().getFullYear()} microNovations`}</p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

const Footer = (props) => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
