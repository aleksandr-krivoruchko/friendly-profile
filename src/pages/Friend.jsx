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
        background:
          "url('https://images.wallpaperscraft.ru/image/single/derevo_svet_temnyj_82372_360x640.jpg') no-repeat center/cover",
        backgroundColor: "#8d8aa0",
      }}>
      <Typography variant="h4" align="center" color="primary">
        Значит ты готов ответить на парочку вопросов
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-between",
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
          autoFocus={true}
          required={true}
          color="primary"
        />
        <Button size="lg" variant="contained" fullWidth={true}>
          <Link to="/trivia">П О Г Н А Л И</Link>
        </Button>
      </Box>
      <Button size="small" variant="contained" color="secondary">
        <Link to="/">НАЗАД</Link>
      </Button>
    </Container>
  );
};

export default Friend;
//https://images.wallpaperscraft.ru/image/single/devushka_noch_zvezdnoe_nebo_160928_360x640.jpg
