import LogoNoLetters from "../../images/logoBlackAndWhiteNoLetters.png";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={LogoNoLetters}
          alt="Statos Operation's logo"
        />
        <ul className="header__list">
          <li className="header__list-item">Home</li>
          <li className="header__list-item">Services</li>
          <li className="header__list-item">About Us</li>
        </ul>
        <BookOnlineButton className="header__button" />
      </div>
    </header>
  );
}

export default Header;
