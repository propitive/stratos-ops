import { useState } from "react";

import SidebarDropdownBulletpoint from "../SidebarDropdownBulletpoint/SidebarDropdownBulletpoint";

function SidebarDropdownItem(content, liClassName) {
  const [isActive, setIsActive] = useState(false);
  const dropdownItemButton = isActive
    ? "sidebar-dropdown-item__button-active"
    : null;

  return (
    <>
      <li className={"sidebar-dropdown-item " + liClassName}>
        <p className="sidebar-dropdown-item__title">{content.content.title}</p>
        <button
          className={"sidebar-dropdown-item__button " + dropdownItemButton}
          type="button"
          onClick={() => setIsActive(!isActive)}
        ></button>
      </li>
      <ul className="sidebar-dropdown-item__bulletpoints">
        {content.content.content.map((bulletpoint) => {
          return (
            <SidebarDropdownBulletpoint
              bulletpoint={bulletpoint}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </>
  );
}

export default SidebarDropdownItem;
