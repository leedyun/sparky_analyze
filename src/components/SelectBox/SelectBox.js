import { useState } from "react";
import {
  SelectBoxStyle,
  Header,
  ListContainer,
  List,
  ListItem,
} from "./SelectBoxStyle";

const SelectBox = () => {
  const options = [
    { option: "게임 동영상", content: "게임 동영상" },
    { option: "시청 동영상", content: "시청 동영상" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState();
  return (
    <SelectBoxStyle>
      <Header onClick={toggling}>
        {selectedOption || "게임 동영상"}
        {isOpen ? (
          <img src="/downArrow.jpg" alt="img" />
        ) : (
          <img src="/downArrow.jpg" alt="img" />
        )}
      </Header>
      {isOpen && (
        <ListContainer>
          <List>
            {options.map((option) => (
              <ListItem
                key={option.option}
                onClick={() => onOptionClicked(option.content)}
              >
                {option.option}
              </ListItem>
            ))}
          </List>
        </ListContainer>
      )}
    </SelectBoxStyle>
  );
};

export default SelectBox;
