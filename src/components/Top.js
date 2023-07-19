import { Container, Grid } from "@material-ui/core";
import { useState, useRef } from "react";
import Calendar0 from "./Calendar/Calendar0";
import Letter from "./Letter/Letter";
import SelectBox from "./SelectBox/SelectBox";

const ParentComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const calendarRef = useRef();
  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    if (calendarRef.current) {
      calendarRef.current.updateDateRange(start, end);
    }
  };

  return (
    <Container>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <SelectBox />
        </Grid>
        <Grid item xs={6}>
          <Calendar0
            startDates={startDate}
            endDates={endDate}
            onDateRangeChange={handleDateRangeChange}
            ref={calendarRef}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Letter startDate={startDate} endDate={endDate} />
      </Grid>
    </Container>
  );
};

export default ParentComponent;
