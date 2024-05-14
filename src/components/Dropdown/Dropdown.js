import DropdownItem from "../DropdownItem/DropdownItem";

const Dropdown = ({ bulletSymbol, dropdownContent }) => {
  return (
    <ul className="dropdown__ul">
      {dropdownContent.map((service) => {
        console.log(service.content);
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
