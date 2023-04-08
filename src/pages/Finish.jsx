import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Finish = ({ data, userName, correctAnswers }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px 0 10px",
        background:
          "url('https://i.7fon.org/1000/c525772.jpg') no-repeat center/cover",
      }}>
      <Box>
        <Typography variant="h4" align="center" color="#fff">
          <b style={{ textTransform: "uppercase", fontSize: "50px" }}>
            {userName}
          </b>
          <br />
          <br /> знает ЖЕНЮ на
        </Typography>

        <Typography
          sx={{
            color: `${correctAnswers > data.length / 2 ? "green" : "#c04641"}`,
            fontSize: "150px",
            marginTop: "50px",
            textShadow: `${
              correctAnswers > data.length / 2
                ? "7px 5px 10px #2BF044"
                : "7px 5px 10px #FFEDDE"
            }`,
          }}>
          {((correctAnswers / data.length) * 100).toFixed(0)}%
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Button
          size="small"
          variant="contained"
          sx={{ marginBottom: "20px" }}
          color={`${correctAnswers > data.length / 2 ? "success" : "error"}`}>
          <Link to="/results">Посмотреть ответы</Link>
        </Button>

        <Button size="small" variant="contained" color="secondary">
          <Link to="/friend">Еще разок ?</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Finish;
