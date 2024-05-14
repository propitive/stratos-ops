import { dropdownContentMenu } from "../../utils/dropdownContent";
import checkSquare from "../../images/icons/check-square.svg";

import Dropdown from "../Dropdown/Dropdown";

function MainServices() {
  return (
    <div className="main-services">
      <div className="main-services__text"></div>
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
