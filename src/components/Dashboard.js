import { Container, Grid } from "@material-ui/core";
import SelectBox from "./SelectBox";
import Data from "./Letter";
import Chart from "./Chart";
import Nav from "./Nav";
import Describe from "./Describe";
import { DashboardStyle, Box } from "./DashboardStyle";

const Dashboard = () => {
  return (
    <Container>
      <Grid item>
        <SelectBox />
      </Grid>
      <Grid item>
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
    </Container>
  );
};

export default Dashboard;
