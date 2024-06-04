import { useState } from "react";

import SidebarDropdownBulletpoint from "../SidebarDropdownBulletpoint/SidebarDropdownBulletpoint";

function SidebarDropdownItem({
  content,
  handleIsSidebarDropdownOpen,
  isSidebarDropdownOpen,
  liClassName,
  showSidebar,
}) {
  // const [isActive, setIsActive] = useState(false);
  const dropdownItemButton = isSidebarDropdownOpen
    ? "sidebar-dropdown-item__button-active"
    : null;
  const itemContainerClassname = isSidebarDropdownOpen
    ? "sidebar-dropdown-item__container-active"
    : null;
  const handleShowSidebarAndResetDropdown = () => {
    showSidebar();
    handleIsSidebarDropdownOpen(false);
    console.log("Ran second function!");
  };

  return (
    <>
      <li className={"sidebar-dropdown-item " + liClassName}>
        <div
          className={
            "sidebar-dropdown-item__container " + itemContainerClassname
          }
          onClick={() => handleIsSidebarDropdownOpen(!isSidebarDropdownOpen)}
        >
          <p className="sidebar-dropdown-item__title">{content.title}</p>
          <button
            className={"sidebar-dropdown-item__button " + dropdownItemButton}
            type="button"
          ></button>
        </div>
      </li>
      <ul className="sidebar-dropdown-item__bulletpoints">
        {content.content.map((bulletpoint) => {
          return (
            <SidebarDropdownBulletpoint
              bulletpoint={bulletpoint}
              isActive={isSidebarDropdownOpen}
              showSidebar={handleShowSidebarAndResetDropdown}
            />
          );
        })}
      </ul>
    </>
  );
}

export default SidebarDropdownItem;
