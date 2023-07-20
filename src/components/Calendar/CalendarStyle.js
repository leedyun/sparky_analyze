import styled from "styled-components";

export const CalendarStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
`;

export const DateBox = styled.div`
  color: var(--light-main-text, #090909);
  height: 66px;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  line-height: 130%;
  letter-spacing: 0.14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  .date {
    font-weight: 400;
    align-items: center;
    display: flex;
  }
  .past {
    font-weight: 700;
  }
`;

export const Box = styled.div`
  padding: 12px;
  display: flex;
  position: absolute;
  right: 0px;
  width: 1055px;
  height: 272px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #ebeff4;
  background: #f5f6f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ButtonBox = styled.div`
  display: flex;
  position : absolute;
  right :12px;
  flex-direction: column;
  line-height: normal;
  letter-spacing: 0.12px;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  color: var(--light-main-text, #090909);
  .buttonstyle {
    align-items : center;
    margin-top: 6px;
    display: flex;
    cursor: pointer;
    width: 206px;
    height: 30px;
    flex-shrink: 0;
    font-weight: 400;
    border-radius: 3px;
    background: var(--bg-2, #fcfcfc);
    border: none;
  }
  .spanstyle {
    display: flex;
    font-weight: 700;
    margin-top: 12px;
  }
  .p {
    display: flex;
    align-items : center;
    .pstyle {
        display : flex;
        align-items : center;
        justify-content : center;
      width: 92px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 3px;
      border: 1px solid #ebeff4;
      background: var(--bg-2, #fcfcfc);
    }
}
    .check {
      display: flex;
      position:relative;
      justify-content: flex-end;
      color: var(--light-main-text, #090909);
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.12px;
    .cancel {
        border : none;
        text-align: center;
        padding: 7px 18px;
        gap: 4px;
        background:none;
        cursor:pointer;
}
      .ok {
        color: var(--dark-main-text, #F5F6F8);
        text-align: center;
        padding: 7px 18px;
        gap: 4px;
        border-radius: 3px;
        background: var(--light-point, #5100ce);
        cursor:pointer;
      }
    }
  }
`;

export const Title = styled.div`
  color: #065fd4;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 33px;
  letter-spacing: 0.14px;
  background: var(--bg-2, #fcfcfc);
`;

export const CalendarContainer = styled.div`
  position: relative;
  font-family: Poppins;
  font-style: normal;
  margin: 0px;
  .react-datepicker {
    color: var(--light-main-text, #090909);
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.12px;
    border: none;
  }

  .react-datepicker__day-name {
    display: inline-grid;
    text-align: center;
    place-items: center;
    color: var(--light-main-text, #090909);
    font-size: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    border: 1px solid #f5f6f8;
    margin: 0px;
    width: 35px;
    height: 28px;
    box-sizing: border-box;
  }

  .react-datepicker__header {
    border-radius: 3px 3px 0px 0px;
    background: var(--bg-2, #fcfcfc);
    border: none;
    width: 266px;
  }
  .react-datepicker__day {
    color: var(--light-main-text, #090909);
    font-size: 12px;
    font-weight: 400;
    display: inline-grid;
    text-align: center;
    place-items: center;
    width: 35px;

    border: 1px solid #f5f6f8;
    margin: 0px;
    box-sizing: border-box;
    &:hover {
      flex-shrink: 0;
      background: #065fd4;
      color: var(--dark-main-text, #f5f6f8);
    }
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background: #065fd4;
    color: var(--dark-main-text, #f5f6f8);
  }
  .react-datepicker__day--disabled {
    border: 1px solid #f5f6f8;
    display: none;
  }
  .react-datepicker__day--outside-month {
    border: 1px solid #f5f6f8;
    pointer-events: none;
    visibility: hidden;
  }
`;
