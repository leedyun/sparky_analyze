import { Container, Grid } from "@material-ui/core";
import Chart from "./Chart";
import Nav from "./Nav/Nav";
import Describe from "./Describe/Describe";
import Video from "./Video/Video";
import Top from "./Top";
import { DashboardStyle, Box } from "./DashboardStyle";

const Dashboard = () => {
  return (
    <Container>
      <Grid item>
        <Top />
      </Grid>
      <Box>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item>
          <Chart />
        </Grid>
      </Box>
      <Grid item>
        <Describe />
      </Grid>
      <Grid item>
        <Video />
      </Grid>
    </Container>
  );
};

export default Dashboard;
