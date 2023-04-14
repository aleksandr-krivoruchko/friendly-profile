import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useSound from "use-sound";
import wait from "../sounds/wait.mp3";

const Friend = ({
  setUserName,
  setCorrectAnswers,
  setQuestionNumber,
  whoAmI,
  setWhoAmI,
}) => {
  const inputRef = React.useRef("Чубака");
  const [waitPlay, { stop }] = useSound(wait);
  const statusList = [
    { label: "близкий родственник" },
    { label: "дальний родственник" },
    { label: "друг" },
    { label: "одноклассник" },
    { label: "знакомый" },
  ];

  React.useEffect(() => {
    setCorrectAnswers(0);
    setQuestionNumber(1);
  }, [setCorrectAnswers, setQuestionNumber]);

  React.useEffect(() => {
    waitPlay();
    return () => stop();
  }, [stop, waitPlay]);

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          marginBottom={5}>
          Значит ты готов ответить на парочку вопросов
        </Typography>
        <Typography variant="p" color="primary" align="center">
          Заполни поля и жмакай кнопку
        </Typography>
        <TextField
          type="text"
          label="Твое имя"
          variant="outlined"
          fullWidth={true}
          autoComplete="off"
          color="primary"
          sx={{ marginBottom: "10px" }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Твой статус</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Твой статус"
            value={whoAmI}
            onChange={(e) => setWhoAmI(e.target.value)}>
            {statusList.map(({ label }) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
