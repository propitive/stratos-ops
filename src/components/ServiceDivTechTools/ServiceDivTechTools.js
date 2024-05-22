function ServiceDivTechTools({ subtitle, tools }) {
  return (
    <div className="service-div-tech-tools">
      <h2 className="service-div-tech-tools__header">
        Tools and Technologies we use
      </h2>
      {/* <h3 className="service-div-tech-tools__subtitle">{subtitle}</h3> */}
      <div className="service-div-tech-tools__items">
        {tools.map((item, i) => {
          return (
            <div className="service-div-tech-tools__item" key={i}>
              <div className="service-div-tech-tools__image-wrapper">
                <img
                  className="service-div-tech-tools__image"
                  src={item.image}
                />
              </div>
              <h2 className="service-div-tech-tools__title">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceDivTechTools;
