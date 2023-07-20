import styled from "styled-components";

const LetterStyle = styled.div`
  height: 120px;
  width: 100%;
  flex-shrink: 1;
  border-radius: 3px;
  border: 1px solid #ebeff4;
  color: #090909;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  min-width: 500px;
  span {
    color: rgba(234, 51, 35, 1);
  }
  p {
    color: var(--light-sub-text-icon, #334d6e);
    text-align: center;
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
  }
`;

export const Box = styled.div``;

export default LetterStyle;
