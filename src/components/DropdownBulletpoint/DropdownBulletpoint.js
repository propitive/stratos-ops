import checkSquare from "../../images/icons/check-square.svg";

const DropdownBulletpoint = ({
  bulletpoint,
  bulletSymbol = [checkSquare],
  isActive,
}) => {
  console.log(`this is 2nd ${isActive}`);
  const bulletpointsClassName = isActive
    ? "dropdown-bulletpoint__expanded"
    : null;

  return (
    <div className={"dropdown-bulletpoint " + bulletpointsClassName}>
      <img
        className="dropdown-bulletpoint__bulletsymbol"
        src={bulletSymbol}
        alt="Bulletpoint's Icon"
      />
      <p className="dropdown-bulletpoint__text">{bulletpoint}</p>
    </div>
  );
};

export default DropdownBulletpoint;
