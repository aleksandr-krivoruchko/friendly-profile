import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Results = ({ data, userName, selectedAnswer }) => {
  console.log(selectedAnswer);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        //   justifyContent: "space-between",
        alignItems: "start",
        flexDirection: "column",
        padding: "40px 10px 10px",
        background:
          "url('https://i.7fon.org/1000/c215712.jpg') no-repeat center/cover",
      }}>
      <Typography variant="p" align="center" color="#fff" marginBottom={2}>
        <b style={{ textTransform: "uppercase", fontSize: "30px" }}>
          {userName}
        </b>
        <br />
        <br /> твои результаты анкеты
      </Typography>
      {data.map((item) => (
        <Box marginBottom={2} borderBottom="1px solid white">
          <Typography
            key={item.id}
            variant="h4"
            align="center"
            color="#fff"
            sx={{
              fontSize: "20px",
            }}>
            {item.question}
          </Typography>

          <Box>
            <Typography align="left" color="#fff" variant="p">
              Правильный ответ:
            </Typography>
            <Typography variant="span" marginLeft={2}>
              {item.answers.map((a) => {
                if (a.correct) {
                  return a.text;
                }
              })}
            </Typography>
          </Box>
        </Box>
      ))}

      <Button size="small" variant="contained" color="secondary">
        <Link to="/">Еще разок ?</Link>
      </Button>
    </Container>
  );
};

export default Results;
