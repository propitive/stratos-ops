import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function ServiceDivCta({ handleOpenGetAQuote, image, paragraph }) {
  return (
    <section className="service-div-cta">
      <div className="service-div-cta__image-container">
        <img
          className="service-div-cta__image"
          src={image}
          alt="Picture for the consultation section"
        />
      </div>
      <div className="service-div-cta__text">
        <h3 className="service-div-cta__title">Get a free consultation</h3>
        <p className="service-div-cta__paragraph">{paragraph}</p>
        <BookOnlineButton
          className="service-div-cta__button"
          handleOpenGetAQuote={handleOpenGetAQuote}
        />
      </div>
    </section>
  );
}

export default ServiceDivCta;
