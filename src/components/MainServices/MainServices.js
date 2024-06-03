import { dropdownContentMenu } from "../../utils/dropdownContent";
import checkSquare from "../../images/icons/check-square.svg";

import Dropdown from "../Dropdown/Dropdown";

function MainServices() {
  return (
    <div className="main-services">
      <div className="main-services__text">
        <div className="main-services__text-container">
          <h2 className="main-services__header">
            Transforming businesses:{" "}
            <span className="main-services__bold-text">Security</span>,{" "}
            <span className="main-services__bold-text">Cloud</span>,{" "}
            <span className="main-services__bold-text">Efficiency</span> - Our
            expertise,{" "}
            <span className="main-services__bold-text">your advantage</span>.
          </h2>
          <p className="main-services__paragraph">
            Imagine never having to worry about your company's data being
            compromised or losing critical information in a disaster; with
            Stratos Operations, you can protect your digital assets from
            threats. Seamlessly transition to the cloud for greater scalability
            and flexibility, optimize your development processes for faster,
            more reliable software releases, and ensure your data is always
            backed up and recoverable. Safeguard your business, streamline
            operations, reduce downtime, and boost overall efficiency, giving
            you peace of mind and a competitive edge in the market.
          </p>
        </div>
      </div>
      <div className="main-services__dropdowns">
        <Dropdown
          bulletSymbol={checkSquare}
          dropdownClassName="main-services__dropdown"
          dropdownContent={dropdownContentMenu}
        />
      </div>
    </div>
  );
}

export default MainServices;
