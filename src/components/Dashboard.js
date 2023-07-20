import { Container, Grid } from "@material-ui/core";
import Describe from "./Describe/Describe";
import Video from "./Video/Video";
import Top from "./Parent/Top";

const Dashboard = () => {
  return (
    <Container>
      <Grid item>
        <Top />
      </Grid>
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
