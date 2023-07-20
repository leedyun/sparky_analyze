import { Container, Grid } from "@material-ui/core";
import { useState, useRef } from "react";
import Calendar0 from "../Calendar/Calendar0";
import LetterView from "../Letter/LetterView";
import LetterPlay from "../Letter/LetterPlay";
import LetterReplay from "../Letter/LetterReplay";
import LetterTime from "../Letter/LetterTime";
import SelectBox from "../SelectBox/SelectBox";
import Nav from "../Nav/Nav";
import Chart from "../Chart/Chart";
import { Box } from "./Box";

const Top = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [selectedMenu, setSelectedMenu] = useState("view");
  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };
  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
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
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {selectedMenu === "view" && (
          <LetterView startDate={startDate} endDate={endDate} />
        )}
        {selectedMenu === "play" && (
          <LetterPlay startDate={startDate} endDate={endDate} />
        )}
        {selectedMenu === "replay" && (
          <LetterReplay startDate={startDate} endDate={endDate} />
        )}
        {selectedMenu === "time" && (
          <LetterTime startDate={startDate} endDate={endDate} />
        )}
      </Grid>
      <Box>
        <Grid item>
          <Nav onSelectMenu={handleSelectMenu} />
        </Grid>
        <Grid item>
          <Chart startDate={startDate} endDate={endDate} />
        </Grid>
      </Box>
    </Container>
  );
};

export default Top;
