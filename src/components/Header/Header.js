import { React, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LogoNoLetters from "../../images/logoBlackAndWhiteNoLetters.png";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { dropdownSidebarContentMenu } from "../../utils/dropdownContent";
import SidebarDropdownItem from "../SidebarDropdownItem/SidebarDropdownItem";

function Header({ handleOpenGetAQuote }) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const liMenuClassName = isDropdownMenu
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleShowSidebar();
    }
  };
  const handleShowSidebar = () => {
    setSidebar(!sidebar);
    setIsSidebarDropdownOpen(false);
  };
  const handleIsSidebarDropdownOpen = (operator) => {
    setIsSidebarDropdownOpen(operator);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <img
            className="header__logo"
            src={LogoNoLetters}
            alt="Statos Operation's logo"
          />
        </Link>
        <ul className="header__list">
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <li className="header__list-item">Home</li>
          </Link>
          <li
            className={liMenuClassName}
            onMouseEnter={() => setIsDropdownMenu(true)}
            onMouseLeave={() => setIsDropdownMenu(false)}
          >
            Services
            {isDropdownMenu && <DropdownMenu />}
          </li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <li className="header__list-item">About Us</li>
          </Link>
        </ul>
        <BookOnlineButton
          className="header__button"
          handleOpenGetAQuote={handleOpenGetAQuote}
        />
      </div>
      <div className="menu__container">
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
            <img className="header__logo" src={LogoNoLetters} />
          </Link>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              style={{
                color: "white",
              }}
              onClick={handleShowSidebar}
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div
            className={`nav-menu__backdrop ${
              sidebar ? "nav-menu__backdrop__open" : ""
            }`}
            onClick={handleCloseOnOverlayClick}
          ></div>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={handleShowSidebar}>
                <AiIcons.AiOutlineClose
                  style={{
                    color: "white",
                  }}
                />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/" onClick={handleShowSidebar}>
                <span>Home</span>
              </Link>
            </li>
            <SidebarDropdownItem
              content={dropdownSidebarContentMenu}
              handleIsSidebarDropdownOpen={handleIsSidebarDropdownOpen}
              isSidebarDropdownOpen={isSidebarDropdownOpen}
              showSidebar={handleShowSidebar}
            />
            <li className="nav-text">
              <Link to="/about" onClick={handleShowSidebar}>
                <span>About Us</span>
              </Link>
            </li>
            {/* <li className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li> */}
            <Link
              to="/contact-form"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <BookOnlineButton
                className="nav-menu__button"
                handleOpenGetAQuote={handleOpenGetAQuote}
              />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
