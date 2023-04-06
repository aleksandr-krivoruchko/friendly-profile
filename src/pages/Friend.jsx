import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, TextField, Box } from "@mui/material";

const Friend = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
      }}>
      <Typography variant="h4" align="center" color="primary">
        Значит ты готов ответить на парочку вопросов
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Typography variant="h6" color="primary">
          Как тебя зовут?
        </Typography>
        <TextField
          label="Твое имя"
          variant="outlined"
          fullWidth={true}
          marginBottom="20px"
        />
        <Button size="lg" variant="contained" fullWidth={true}>
          <Link to="/">П О Г Н А Л И</Link>
        </Button>
      </Box>
      <Button size="small" variant="contained" color="secondary">
        <Link to="/">НАЗАД</Link>
      </Button>
    </Container>
  );
};

export default Friend;
