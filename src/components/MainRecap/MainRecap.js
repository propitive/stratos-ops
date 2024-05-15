import { useState } from "react";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MainRecap() {
  const [activeSection, setActiveSection] = useState(1);
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
            business with security, cloud, and recovery expertise.
          </span>
          <BookOnlineButton className="main-recap__button" />
        </div>
      </div>
      <div className="main-recap__paragraph-section">
        <div className="main-recap__headers">
          <button
            className={"main-recap__header-mission " + headerMissionClassName}
            onClick={() => setActiveSection(1)}
          >
            Mission statement
          </button>
          <button
            className={
              "main-recap__header-principles " + headerPrinciplesClassName
            }
            onClick={() => setActiveSection(2)}
          >
            Our principles
          </button>
          <button
            className={"main-recap__header-choose " + headerChooseClassName}
            onClick={() => setActiveSection(3)}
          >
            Why choose us
          </button>
        </div>
        {activeSection === 1 && (
          <p className="main-recap__paragraph">
            Money, get away You get a good job with more pay and you're OK
            Money, it's a gas Grab that cash with both hands and make a stash
            New car, caviar, four-star daydream Think I'll buy me a football
            team Money, get back I'm alright, Jack, keep your hands off of my
            stack Money, it's a hit Ah, don't give me that do-goody-good
            bullshit I'm in the high-fidelity first-class traveling set And I
            think I need a Learjet Money, it's a crime Share it fairly but don't
            take a slice of my pie Money, so they say Is the root of all evil
            today But if you ask for a rise it's no surprise that they're giving
            none away
          </p>
        )}
        {activeSection === 2 && (
          <p className="main-recap__paragraph">
            Ticking away the moments that make up a dull day You fritter and
            waste the hours in an off-hand way Kicking around on a piece of
            ground in your home town Waiting for someone or something to show
            you the way Tired of lying in the sunshine, staying home to watch
            the rain And you are young and life is long, and there is time to
            kill today And then one day you find ten years have got behind you
            No one told you when to run, you missed the starting gun
          </p>
        )}
        {activeSection === 3 && (
          <p className="main-recap__paragraph">
            Breathe, breathe in the air Don't be afraid to care Leave, but don't
            leave me Look around Choose your own ground Long you live and high
            you fly And smiles you'll give and tears you'll cry And all you
            touch and all you see Is all your life will ever be Run, rabbit run
            Dig that hole, forget the sun And when at last the work is done
            Don't sit down It's time to dig another one For long you live and
            high you fly But only if you ride the tide And balanced on the
            biggest wave You race towards an early grave
          </p>
        )}
      </div>
    </div>
  );
}

export default MainRecap;
