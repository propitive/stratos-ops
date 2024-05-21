import checkSquare from "../../images/icons/check-square.svg";

function ServiceDivAvantages({ advantages }) {
  return (
    <section className="service-div-advantages">
      {advantages.map((advantage, i) => {
        return (
          <div className="service-div-advantages__advantage">
            <img
              className="service-div-advantages__image"
              src={advantage.image}
              alt={`image of ${advantage.image}`}
            />
            <h3 className="service-div-advantages__title">{advantage.title}</h3>
            <ul className="service-div-advantages__bulletpoints">
              {advantage.bulletpoints.map((bulletpoint, i) => {
                return (
                  <li className="service-div-advantages__bulletpoint" key={i}>
                    <img
                      className="service-div-advantages__bulletsymbol"
                      src={checkSquare}
                      alt={"Check mark"}
                    />
                    <p className="service-div-advantages__bulletpoint-text">
                      {bulletpoint}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceDivAvantages;
