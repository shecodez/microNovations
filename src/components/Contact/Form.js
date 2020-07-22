import React from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      isSubmitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => this.setState({ isSubmitted: true }))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section id="contact-us" className="contact-form mx-5 text-center">
        <h4 className="heading-4 mb-6">Contact Us</h4>

        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="columns">
            <div className="field column is-half">
              <label className="label" htmlFor={"name"}>
                Enter Your Name*
              </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>

            <div className="field column is-half">
              <label className="label" htmlFor={"email"}>
                Enter Your Email*
              </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"message"}>
              Type Your Message Here...
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Message"
                name={"message"}
                onChange={this.handleChange}
                id={"message"}
                required={true}
              />
            </div>
          </div>

          <div className="field">
            <button className="button link-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="success-message">
          <p className="paragraph-2">Thanks for submitting!</p>
        </div>
      </section>
    );
  }
}
