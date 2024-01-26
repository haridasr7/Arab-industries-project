import React from "react";
import "./Sidebar.css";
import Grid from "@mui/material/Grid";
import { Paper, Button } from "@mui/material";
import briefcase from "../../UI/Assets/Briefcase.png";
import cricleMenu from "../../UI/Assets/Circled Menu.png";
import support from "../../UI/Assets/Support.png";
import puzzle from "../../UI/Assets/Puzzle.png";
import Help from "../../UI/Assets/Help.png";
import shutdown from "../../UI/Assets/Shutdown.png";

function Sidebar() {
  return (
    <div>
      <Grid container spacing={1} id="sidebar">
        <Grid item xs={12}>
          <img src={briefcase} alt="" width={"100%"} />
        </Grid>
        <Grid item sx={{ paddingLeft: "3.5vw", marginTop: "6vw" }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper className="items">
                <Button sx={{ color: "#c5c6ca" }}>
                  <img src={cricleMenu} alt="" />
                  &nbsp; &nbsp; Dashboard
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="items">
                <Button sx={{ color: "#c5c6ca" }}>
                  <img src={support} alt="" /> &nbsp; &nbsp; Support
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="items">
                <Button sx={{ color: "#c5c6ca" }}>
                  <img src={puzzle} alt="" /> &nbsp; &nbsp;Plugins
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="items">
                <Button sx={{ color: "#c5c6ca" }}>
                  <img src={Help} alt="" />
                  &nbsp; &nbsp;Help
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "end",
            display: "inline-flex",
            marginTop: "8vw",
          }}
          xs={12}
        ></Grid>
      </Grid>
      <Button
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0",
          padding: "1vw",
          marginTop: "3vw",
          height: "2vw",
        }}
        fullWidth
      >
        Logout &nbsp;
        <img src={shutdown} alt="" />
      </Button>
    </div>
  );
}

export default Sidebar;
