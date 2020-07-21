import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { useEmblaCarousel } from "embla-carousel/react";

import rightArrowSVG from "../../images/right-arrow.svg";

const Testimonials = (props) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    loop: true,
  });
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (embla) {
      // Embla API is ready
      embla.on("select", () => setSlide(embla.selectedScrollSnap()));
    }
  }, [embla]);

  const renderDots = useCallback(() => {
    if (embla) {
      return embla
        .scrollSnapList()
        .map((snap, i) => (
          <button
            key={i}
            active={i === slide ? "active" : ""}
            aria-label={`Scroll to slide number ${i + 1}`}
            className={`dot ${i === slide ? "is-active" : ""}`}
            type="button"
            onClick={() => embla.scrollTo(i)}
          />
        ));
    }

    return null;
  }, [embla, slide]);

  const testimonials = props.testimonials.map((testimonial, i) => {
    return (
      <article key={v4()} className="testimonial">
        <h4 className="heading-4">{testimonial.quote}</h4>
        <cite className="paragraph-1">
          {testimonial.author.name} <br />
          {testimonial.author.title}
        </cite>
      </article>
    );
  });

  return (
    <div className="testimonial-section">
      <div className="container px-6">
        <h5 className="heading-5">Testimonials</h5>
        <EmblaCarouselReact>
          <div style={{ display: "flex" }}>{testimonials}</div>
        </EmblaCarouselReact>
      </div>
      <div className="dots pt-5">{renderDots()}</div>
      <button
        className="prev-btn is-hidden-mobile"
        onClick={() => embla.scrollPrev()}
      >
        <img src={rightArrowSVG} alt="prev btn" />
      </button>
      <button
        className="next-btn is-hidden-mobile"
        onClick={() => embla.scrollNext()}
      >
        <img src={rightArrowSVG} alt="next btn" />
      </button>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.object,
    })
  ),
};

export default Testimonials;
