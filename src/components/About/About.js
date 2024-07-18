import { aboutInfoCards } from "../../utils/constants";

function About() {
  return (
    <>
      {/* <div className="about__subsections">
        <section className="about__container">
          <img className="about__image" src={tioSebasCooking} />
          <div className="about__text">
            <h2 className="about__subheading">About Paradize Pizzas</h2>
            <p className="about__paragraph">
              Enjoy fresh wood oven pizzas made onsite; let us cater your next
              event!
            </p>
          </div>
        </section>
      </div> */}
      <div className="about">
        <div className="about__header">
          <p className="about__header__subtitle">
            Disrupting the overpriced DevOps industry with
            <a className="about__header__subtitle__emphasis">
              {" "}
              radically fair
            </a>{" "}
            prices and
            <a className="about__header__subtitle__emphasis"> quality </a> work.
          </p>
        </div>
        <div className="about__showcase">
          <h2 className="about__showcase-header">
            <a className="about__header__subtitle__emphasis">Simplifying</a> The
            DevOps Experience
          </h2>
          {/* <div className="about__showcase-items">
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">10+</h3>
              <p className="about__showcase-item__subtitle">
                Years of Experience
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">20+</h3>
              <p className="about__showcase-item__subtitle">Events Catered</p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">100%</h3>
              <p className="about__showcase-item__subtitle">
                Client Satisfaction
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">31</h3>
              <p className="about__showcase-item__subtitle">Options</p>
            </div>
          </div> */}
        </div>
        <div className="about__what">
          {aboutInfoCards.map((info) => {
            return (
              <div className="about__what-card">
                <img className="about__what-card__icon" src={info.icon} />
                <p className="about__what-card__paragraph">{info.paragraph}</p>
              </div>
            );
          })}
          {/* <p className="about__what-card__paragraph">
            Welcome to Stratos Operations, your premier partner in cybersecurity
            and cloud services. We specialize in protecting businesses from
            digital threats while optimizing cloud infrastructure for maximum
            efficiency and security. Our team of certified experts is dedicated
            to providing comprehensive solutions, including threat detection,
            incident response, and cloud migration services. We leverage
            cutting-edge technology and best practices to ensure your data and
            systems are secure and your cloud operations run seamlessly. At
            Stratos Operations, we prioritize your security and operational
            success, building lasting relationships based on trust and
            reliability. Partner with us to safeguard your digital assets and
            harness the full potential of the cloud.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default About;
