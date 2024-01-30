import { useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownLink,
  DropdownTitle,
} from "./DropDownStyled";
import NestedDropdown from "./NestedDropDown";

const dropArr = ["1", "2", "3", "4", "5"];

const Dropdown = ({ name }) => {
  const [showContent, setShowContent] = useState(false);

  const handleHoverEnter = (e) => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  const handleHoverLeave = () => {
    setTimeout(() => {
      setShowContent(false);
    }, 300);
  };

  return (
    <DropdownContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <DropdownTitle>{name}</DropdownTitle>
      {showContent && (
        <DropdownContent className="dropdown-content">
          {dropArr.map((item) => (
            <DropdownLink href="#" key={item}>
              категорії {name} {item}
              <NestedDropdown item={item} name={name} />
            </DropdownLink>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
