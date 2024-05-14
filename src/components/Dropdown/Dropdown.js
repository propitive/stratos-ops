import DropdownItem from "../DropdownItem/DropdownItem";

const Dropdown = ({ bulletSymbol, dropdownClassName, dropdownContent }) => {
  return (
    <ul className={"dropdown__ul " + dropdownClassName}>
      {dropdownContent.map((service) => {
        return (
          <DropdownItem
            bulletSymbol={bulletSymbol}
            content={service.content}
            liClassName=""
            key={service.id}
            keyValue={service.id}
            title={service.title}
          />
        );
      })}
    </ul>
  );
};

export default Dropdown;
