import { dropdownContentMenu } from "../../utils/dropdownContent";
import checkSquare from "../../images/icons/check-square.svg";

import Dropdown from "../Dropdown/Dropdown";

function MainServices() {
  return (
    <div className="main-services">
      <div className="main-services__text">
        <div className="main-services__text-container">
          <h2 className="main-services__header">
            Transforming businesses: Security, Cloud, Efficiency - Our
            expertise, your advantage.
          </h2>
          <p className="main-services__paragraph">
            Breathe, breathe in the air Don't be afraid to care Leave, but don't
            leave me Look around Choose your own ground Long you live and high
            you fly And smiles you'll give and tears you'll cry And all you
            touch and all you see Is all your life will ever be
          </p>
        </div>
      </div>
      <div className="main-services__dropdowns">
        <Dropdown
          bulletSymbol={checkSquare}
          dropdownClassName=""
          dropdownContent={dropdownContentMenu}
        />
      </div>
    </div>
  );
}

export default MainServices;
