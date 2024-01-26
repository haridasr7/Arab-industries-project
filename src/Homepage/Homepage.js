import React, { useState } from "react";
import "./Homepage.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import { Grid, Hidden, Drawer, Button } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";

function Homepage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          width={200}
        >
          <Sidebar />
        </Drawer>

        <Button onClick={toggleDrawer} id="toggleButton">
          <HiOutlineBars3 />
        </Button>
      </Hidden>
      <Grid container spacing={0}>
        <Hidden mdDown>
          <Grid item xs={2} md={2}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10} lg={10}>
          <Main />
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
