import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function ServiceDivHero({ handleOpenGetAQuote, image, paragraph }) {
  return (
    <div className="k-cabinets__first-section">
      <div className="k-cabinets__first-section__description">
        <h3 className="k-cabinets__first-section__header">
          Get a free consultation
        </h3>
        <p className="k-cabinets__first-section__paragraph">{paragraph}</p>
        <BookOnlineButton
          className="k-cabinets__first-section__button"
          handleOpenGetAQuote={handleOpenGetAQuote}
        />
      </div>
      <img
        className="k-cabinets__first-section__image"
        src={image}
        alt="Picture of satisfied customer!"
      />
    </div>
  );
}

export default ServiceDivHero;
