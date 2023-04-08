import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Results = ({ data }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        //   justifyContent: "space-between",
        alignItems: "start",
        flexDirection: "column",
        padding: "40px 0 10px",
        background:
          "url('https://i.7fon.org/1000/c215712.jpg') no-repeat center/cover",
      }}>
      {data.map((item) => (
        <Box marginBottom={5}>
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

          <Box>
            <Typography color="#fff" variant="p">
              Твой ответ:
            </Typography>
            <Typography variant="span" marginLeft={2}>
              {item.answers.map((a) => {
                if (!a.correct) {
                  return a.text;
                }
              })}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Results;
