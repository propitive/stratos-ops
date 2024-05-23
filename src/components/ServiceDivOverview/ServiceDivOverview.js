function ServiceDivOverview({ bulletpoints, paragraph, title }) {
  return (
    <section className="service-div-overview">
      <div className="service-div-overview__text">
        <div className="service-div-overview__text-container">
          {title}
          {paragraph}
        </div>
      </div>
      <div className="service-div-overview__points">
        {bulletpoints.map((bulletpoint, i) => {
          return (
            <div className="service-div-overview__point" key={i}>
              {bulletpoint}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceDivOverview;
