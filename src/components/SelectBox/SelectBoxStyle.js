import styled from "styled-components";

export const SelectBoxStyle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  color: var(--light-main-text, #090909);
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    height: 60px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    height: 50px;
    font-size: 12px;
  }
`;

export const ListContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 85%;
  z-index: 1;
  width: 105px;
  height: 66px;
  border-radius: 3px;
  background: var(--bg-2, #fcfcfc);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 760px) {
    font-size: 14px;
    width: 95px;
    height: 60px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 85px;
    height: 56px;
  }
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
  @media screen and (max-width: 760px) {
    font-size: 14px;
    width: 95px;
    height: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 85px;
    height: 28px;
  }
`;
