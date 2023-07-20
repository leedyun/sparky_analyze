import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, differenceInDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import {
  CalendarStyle,
  DateBox,
  Box,
  ButtonBox,
  Title,
  CalendarContainer,
} from "./CalendarStyle";

const CustomHeader = ({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <div>
      <Title>
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          style={{
            width: 24,
            height: 24,
            border: "none",
            background: "none",
            position: "absolute",
            left: 0,
          }}
        >
          <img src="leftArrow.png" alt="left" />
        </button>
        {monthDate.getFullYear()}년 {monthDate.getMonth() + 1}월
        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          style={{
            width: 24,
            height: 24,
            border: "none",
            background: "none",
            position: "absolute",
            right: 0,
          }}
        >
          <img
            src="rightArrow.png"
            alt="right"
            style={{ width: 24, height: 24 }}
          />
        </button>
      </Title>
    </div>
  );
};
const Calendar0 = ({ onDateRangeChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateRangeChange(start, end);
  };

  const handleCustomSelection = () => {
    setShowCalendar(!showCalendar);
  };

  const formatDate = (date) => {
    return format(date, "yyyy.MM.dd");
  };

  const handlePastDateClick = (days) => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - days);
    setStartDate(pastDate);
    setEndDate(new Date());
    onDateRangeChange(pastDate, new Date());
  };

  const handleApply = () => {
    setShowCalendar(false);
  };

  const handleCancel = () => {
    setStartDate(new Date());
    setEndDate(null);
    setShowCalendar(false);
    onDateRangeChange(new Date(), null);
  };
  const getSelectedDays = (startDate, endDate) => {
    if (endDate) {
      const days = differenceInDays(endDate, startDate) + 1;
      return days > 0 ? days : 0;
    }
    return 1;
  };

  return (
    <CalendarStyle>
      <DateBox onClick={handleCustomSelection}>
        <div className="date">
          {formatDate(startDate)}
          &nbsp;~&nbsp;{formatDate(endDate || startDate)}
          <img src="/downArrow.jpg" alt="img" className="img" />
        </div>
        <div className="past">지난 {getSelectedDays(startDate, endDate)}일</div>
      </DateBox>
      {showCalendar && (
        <Box>
          <CalendarContainer>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={3}
              locale={ko}
              selectsRange
              inline
              calendarClassName="date-picker-calendar"
              renderCustomHeader={({
                monthDate,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
                calendarIndex,
              }) => (
                <CustomHeader
                  monthDate={monthDate}
                  decreaseMonth={decreaseMonth}
                  increaseMonth={increaseMonth}
                  prevMonthButtonDisabled={prevMonthButtonDisabled}
                  nextMonthButtonDisabled={nextMonthButtonDisabled}
                />
              )}
            />
          </CalendarContainer>
          <ButtonBox>
            <span className="spanstyle">추천 기간</span>
            <button
              className="buttonstyle"
              onClick={() => handlePastDateClick(28)}
            >
              지난 28일
            </button>
            <button
              className="buttonstyle"
              onClick={() => handlePastDateClick(7)}
            >
              지난 7일
            </button>
            <button
              className="buttonstyle"
              onClick={() => handlePastDateClick(1)}
            >
              어제
            </button>
            <span className="spanstyle">사용자 설정</span>
            <div className="p">
              <p className="pstyle">{formatDate(startDate)}</p>
              <p className="center">&nbsp;-&nbsp;</p>
              <p className="pstyle">{formatDate(endDate || startDate)}</p>
            </div>
            <div className="check">
              <button className="cancel" onClick={handleCancel}>
                취소
              </button>
              <button className="ok" onClick={handleApply}>
                적용
              </button>
            </div>
          </ButtonBox>
        </Box>
      )}
    </CalendarStyle>
  );
};

export default Calendar0;
