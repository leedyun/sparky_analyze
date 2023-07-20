import styled from "styled-components";

export const SelectBoxStyle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  width: 120px;
  height: 66px;
  align-items: center;
  color: var(--light-main-text, #090909);
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  position: absolute;
  top: 42px;
  z-index: 1;
  width: 105px;
  height: 66px;
  border-radius: 3px;
  background: var(--bg-2, #fcfcfc);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  width: 105px;
  height: 33px;
  flex-shrink: 0;
  cursor: pointer;
  justify-content: space-evenly;
  &:hover {
    border-radius: 3px 3px 0px 0px;
    background: #f5f6f8;
  }
`;
