import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, TextField, Box } from "@mui/material";

const Friend = ({ setUserName, setCorrectAnswers, setQuestionNumber }) => {
  React.useEffect(() => {
    setUserName("Чубака");
    setCorrectAnswers(0);
    setQuestionNumber(1);
  }, [setCorrectAnswers, setQuestionNumber, setUserName]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px 0",
        background:
          "url('https://images.wallpaperscraft.ru/image/single/derevo_svet_temnyj_82372_360x640.jpg') no-repeat center/cover",
        backgroundColor: "#8d8aa0",
      }}>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          marginBottom={5}>
          Значит ты готов ответить на парочку вопросов
        </Typography>
        <Typography variant="h6" color="primary" marginBottom={2}>
          Введи свое имя и жмакай кнопку
        </Typography>
        <TextField
          type="text"
          label="Твое имя"
          variant="outlined"
          fullWidth={true}
          autoFocus={true}
          color="primary"
          sx={{ marginBottom: "10px" }}
          onChange={(e) => setUserName(e.target.value)}
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
