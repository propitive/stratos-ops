import { useState } from "react";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MainRecap({ handleOpenGetAQuote }) {
  const [activeSection, setActiveSection] = useState(2);
  const headerMissionClassName =
    activeSection === 1 ? "main-recap__header-mission-active" : null;
  const headerPrinciplesClassName =
    activeSection === 2 ? "main-recap__header-principles-active" : null;
  const headerChooseClassName =
    activeSection === 3 ? "main-recap__header-choose-active" : null;

  return (
    <div className="main-recap">
      <div className="main-recap__text-section">
        <div className="main-recap__text-container">
          <span className="main-recap__text">
            Stratos Operations: fortify, migrate, automate - empowering your
            business with{" "}
            <span className="main-recap__paragraph-bold-text">security</span>,{" "}
            <span className="main-recap__paragraph-bold-text">cloud</span>, and{" "}
            <span className="main-recap__paragraph-bold-text">
              recovery expertise
            </span>
            .
          </span>
          <BookOnlineButton
            className="main-recap__button"
            handleOpenGetAQuote={handleOpenGetAQuote}
          />
        </div>
      </div>
      <div className="main-recap__paragraph-section">
        <div className="main-recap__headers">
          <h2
            className={"main-recap__header-mission " + headerMissionClassName}
            onClick={() => setActiveSection(1)}
          >
            Mission statement
          </h2>
          <div className="main-recap__divider"></div>
          <h2
            className={
              "main-recap__header-principles " + headerPrinciplesClassName
            }
            onClick={() => setActiveSection(2)}
          >
            Our principles
          </h2>
          <div className="main-recap__divider"></div>
          <h2
            className={"main-recap__header-choose " + headerChooseClassName}
            onClick={() => setActiveSection(3)}
          >
            Why choose us
          </h2>
        </div>
        {activeSection === 1 && (
          <p className="main-recap__paragraph">
            Through innovative technological solutions, Stratos Operations
            delivers cutting-edge IT services tailored to meet your unique
            needs. With a focus on excellence, integrity, and collaboration, we
            are determined to drive digital transformation and foster
            exponential growth for organizations worldwide.
            <br />
            <br />
            We are dedicated to building lasting relationships through integrity
            and exceptional service, consistently pushing the boundaries of what
            is possible. Our innovative approach ensures that we not only meet
            but exceed our clients' expectations, providing solutions that are
            as reliable as they are cutting-edge.
          </p>
        )}
        {activeSection === 2 && (
          <p className="main-recap__paragraph">
            <span className="main-recap__paragraph-bold-text">Innovation:</span>{" "}
            We embrace a proactive approach to technology, constantly exploring
            emerging trends and solutions to stay at the forefront of the IT
            industry.
            <br />
            <br />
            <span className="main-recap__paragraph-bold-text">
              Customer-Centricity:
            </span>{" "}
            Open and transparent communication allows us to exceed your
            expectations with IT solutions that add tangible value to your
            businesses.
            <br />
            <br />
            <span className="main-recap__paragraph-bold-text">
              Reliability and Security:
            </span>{" "}
            Whilst adhering to industry best practices and standards, we ensure
            the highest level of reliability and security for your systems and
            data.
          </p>
        )}
        {activeSection === 3 && (
          <p className="main-recap__paragraph">
            We offer quick, efficient, cost-effective solutions within our
            flexible on-demand model; eliminating overhead costs associated with
            hiring and maintaining a full time IT staff.
            <br />
            <br />
            We are a veteran owned company experienced with modern day security
            and the latest cloud practices; ensuring your company is ahead of
            the curve.
            <br />
            <br />
          </p>
        )}
      </div>
    </div>
  );
}

export default MainRecap;
