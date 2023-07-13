import { Container, Grid } from "@material-ui/core";
import SelectBox from "./SelectBox";
import Data from "./Letter";
import Chart from "./Chart";
import Nav from "./Nav";
import Describe from "./Describe";
import Video from "./Video";
import { DashboardStyle, Box } from "./DashboardStyle";

const Dashboard = () => {
  return (
    <Container style={{ position: "relative" }}>
      <Grid>
        <SelectBox style={{ zIndex: -1 }} />{" "}
      </Grid>
      <Grid>
        <Data />
      </Grid>
      <Box>
        <Grid>
          <Nav />
        </Grid>
        <Grid item>
          <Chart />
        </Grid>
      </Box>
      <Grid>
        <Describe />
      </Grid>
      <Grid>
        <Video />
      </Grid>
    </Container>
  );
};

export default Dashboard;
