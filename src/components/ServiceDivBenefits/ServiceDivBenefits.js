function ServiceDivBenefits({ benefits }) {
  return (
    <section className="service-div-benefits">
      <h3 className="service-div-benefits__title">
        Benefits for your business
      </h3>
      <div className="service-div-benefits__container">
        {benefits.map((benefit, i) => {
          return (
            <div className="service-div-benefits__benefit" key={i}>
              <img
                className="service-div-benefits__image"
                src={benefit.image}
                alt="Image of benefit"
              />
              <p className="service-div-benefits__text">{benefit.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceDivBenefits;
