import React from "react";

import useSiteMetadata from "../SiteMetadata";
import ContactForm from "../Contact/Form";
import { scrollToTop } from "../../utils";
import contact from "../../../site/settings/contact_info.json";
import downChevronSVG from "../../images/down-chevron.svg";

const Footer = () => {
  const { title } = useSiteMetadata();
  const { email, phone } = contact;
  const { street, city, state, zipCode } = contact.address;

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
          <p className="copyright paragraph-3">{`© ${new Date().getFullYear()} ${title}`}</p>
          <button className="button icon-btn page-top" onClick={scrollToTop}>
            <img src={downChevronSVG} alt="Page Top" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
