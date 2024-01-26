import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { MdWbSunny } from "react-icons/md";
import { Grid, Card, Typography, useMediaQuery } from "@mui/material";
import "./Main.css";
import media from "../../UI/Assets/media.png";
import facebook from "../../UI/Assets/facebook.png";
import insta from "../../UI/Assets/instagram.png";
import twitter from "../../UI/Assets/twitter.png";
import rectangle from "../../UI/Assets/Rectangle 10.png";

function Main() {
  //Graph
  const [graph, setGraph] = useState([]);
  const isSmallScreens = useMediaQuery("(max-width: 425px)");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/graph")
      .then((response) => {
        // console.log("graph", response.data);
        setGraph(response.data);
      })
      .catch((error) => console.error("error fetching graph", error));
  }, []);

  const names = graph.map((item) => item.x);
  const values = graph.map((item) => item.y);

  const chartOptions = {
    xaxis: {
      categories: names,
    },
    yaxis: {
      min: 0,
      stepSize: 5,
    },
    width: isSmallScreens ? "100%" : "80%",
  };

  const chartSeries = [
    {
      name: "Graph Data",
      data: values,
    },
  ];

  //PieChart
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pie-chart")
      .then((response) => {
        setPieChartData(response.data);
        // console.log("pieChart", response.data);
      })
      .catch((error) => console.error("Error fetching pie chart data", error));
  }, []);

  const labels = pieChartData.map((item) => item.label);
  const pieVal = pieChartData.map((item) => item.value);
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const pieOptions = {
    labels: labels,
    legend: {
      position: isSmallScreen ? "right" : "bottom",
      horizontalAlign: "center",
    },
  };

  const pieSeries = pieVal;
  //   console.log(pieSeries);

  //table
  const [table, setTable] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/table")
      .then((response) => {
        setTable(response.data);
      })
      .catch((error) => console.error("Error fetching table data", error));
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#e8edff", height: "min-Content" }}>
        <Grid container spacing={1} paddingLeft={"2vw"}>
          <Grid item xs={10} lg={10} md={10} sm={10}>
            <h4>
              Good Morning! &nbsp;
              <MdWbSunny color="#fdb41c" fontSize={"2vw"} />{" "}
            </h4>
          </Grid>
          <Grid item xs={2} lg={1} md={2} sm={2}>
            <Card>
              <img src={rectangle} alt="" />
              <Typography>John doe</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid
          Container
          spacing={1}
          display={"flex"}
          flexDirection={"row"}
          marginTop={"15px"}
          paddingLeft={"2vw"}
          gap={{ lg: "2vw", md: "1vw" }}
          id="chartasection"
        >
          <Grid item xs={12} md={7} lg={7} sm={11} id="graph">
            <Card display={"flex"} flexDirection={"column"}>
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={350}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={5} lg={4} sm={11}>
            <Card>
              <Chart
                options={pieOptions}
                series={pieSeries}
                type="pie"
                width="380"
                height="350"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          marginTop={"40px"}
          paddingLeft={"2vw"}
          gap={"2vw"}
        >
          <Grid item xs={11} md={8}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {table.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
          <Grid item xs={11} md={3}>
            <Card
              display={"flex"}
              flexDirection={"column"}
              sx={{ borderRadius: "9px" }}
            >
              <Card>
                <img src={media} alt="" width={"100%"} />
              </Card>
              <Typography textAlign={"center"}>John Doe</Typography>

              <Typography textAlign={"center"}>C E O</Typography>
              <Card id="social">
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
              </Card>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Main;
