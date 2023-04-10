import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, TextField, Box } from "@mui/material";
import useSound from "use-sound";
import wait from "../sounds/wait.mp3";

const Friend = ({ setUserName, setCorrectAnswers, setQuestionNumber }) => {
  const inputRef = React.useRef("Чубака");
  const [waitPlay, { stop }] = useSound(wait);

  React.useEffect(() => {
    setCorrectAnswers(0);
    setQuestionNumber(1);
  }, [setCorrectAnswers, setQuestionNumber, setUserName]);

  React.useEffect(() => {
    waitPlay();
  }, [waitPlay]);

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
    stop();
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px 10px",
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
        <Button
          size="lg"
          variant="contained"
          fullWidth={true}
          onClick={handleClick}>
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
