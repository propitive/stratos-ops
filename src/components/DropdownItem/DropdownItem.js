import { useState } from "react";

import DropdownBulletpoint from "../DropdownBulletpoint/DropdownBulletpoint";

const DropdownItem = ({
  bulletSymbol,

  content,
  liClassName,
  keyValue,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownItemButton = isActive ? "dropdown-item__button-active" : null;

  return (
    <>
      <li className={"dropdown-item " + liClassName} key={keyValue}>
        <p className="dropdown-item__title">{title}</p>
        <button
          className={"dropdown-item__button " + dropdownItemButton}
          type="button"
          onClick={() => setIsActive(!isActive)}
        ></button>
        {/* {isActive ? (
          <button
            className="dropdown-item__active-button"
            type="button"
            onClick={() => setIsActive(!isActive)}
          ></button>
        ) : (
          <button
            className="dropdown-item__inactive-button"
            type="button"
            onClick={() => setIsActive(!isActive)}
          ></button>
        )} */}
      </li>
      <ul className="dropdown-item__bulletpoints">
        {content.map((bulletpoint) => {
          return (
            <DropdownBulletpoint
              bulletpoint={bulletpoint}
              bulletSymbol={bulletSymbol}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </>
  );
};

export default DropdownItem;
