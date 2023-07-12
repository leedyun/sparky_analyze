import React, { useState } from "react";
import SelectBoxWrapper from "./SelectBoxWrapper";

const SelectBox = () => {
  const [selected, setSelected] = useState();
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
  const options = [{ text: "게임 동영상" }, { text: "시청 동영상" }];

  return (
    <SelectBoxWrapper value={selected} onChange={handleChange}>
      <ul>
        <li>
          <a href="#">게임 동영상</a>
        </li>
        <li>
          <a href="#">시청 동영상</a>
        </li>
      </ul>
    </SelectBoxWrapper>
  );
};

export default SelectBox;
