function ServiceDivBenefits({ benefits }) {
  return (
    <section className="service-div-benefits">
      <h3 className="service-div-benefits__title">
        Benefits for your business
      </h3>
      {benefits.map((benefit, i) => {
        <div className="service-div-benefits__benefit" key={i}>
          <img
            className="service-div-benefits_image"
            src={benefit.image}
            alt="Image of benefit"
          />
          <p className="service-div-benefits__text">{benefit.text}</p>
        </div>;
      })}
    </section>
  );
}

export default ServiceDivBenefits;
