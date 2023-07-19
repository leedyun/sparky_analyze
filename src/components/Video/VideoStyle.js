import styled from "styled-components";

export const VideoStyleContainer = styled.table`
  width: 100%;
`;
export const Title = styled.tr`
  height: 18px;
  color: var(--light-main-text, #090909);
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.14px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 77px 148px 4fr 1fr 1fr;
`;
export const VideoStyle = styled.tr`
  height: 82px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #ebeff4;
  color: var(--light-main-text, #090909);
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.14px;
  align-items: center;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 77px 148px 4fr 1fr 1fr;
`;
export const DataIndex = styled.td``;
export const Youtube = styled.td`
  width: 148px;
`;
export const Describe = styled.td`
  color: var(--light-main-text, #090909);
`;
export const Participate = styled.td`
  color: var(--light-main-text, #090909);
  font-weight: 700;
`;
export const Date = styled.td`
  color: var(--light-main-text, #090909);
  font-weight: 700;
`;

export const More = styled.div`
  color: #065fd4;
  font-size: 18px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.18px;
  cursor: pointer;
  margin-top: 36px;
  .img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
