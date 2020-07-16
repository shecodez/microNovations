import React from "react";

import useSiteMetadata from "../SiteMetadata";
import ContactForm from "../Forms/ContactForm";
import Copyright from "./Copyright";

const Footer = () => {
  const { contact } = useSiteMetadata();
  const { email, phone } = contact;
  const { street, city, state, zipCode } = contact.address;

  return (
    <div className="footer">
      <section className="container">
        <ContactForm />

        <div className="footer-text">
          <div className="address paragraph-2">
            Address.{" "}
            <address>{`${street} ${city} ${state} ${zipCode}`}</address>
          </div>
          <p className="tel paragraph-2">Tel. {phone}</p>
          <p className="email paragraph-2">
            Email. <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>

        <Copyright />
      </section>
    </div>
  );
};

export default Footer;
