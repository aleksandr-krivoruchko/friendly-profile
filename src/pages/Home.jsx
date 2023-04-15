import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
} from "@mui/material";
import Ava from "../img/face3.jpg";
import useSound from "use-sound";
import sound from "../sounds/druzhba.mp3";

const Home = () => {
  const [playSound, { stop }] = useSound(sound);

  React.useEffect(() => {
    playSound();

    return () => stop();
  });

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        //   justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        paddingBottom: "10px",
        background:
          "url('https://images.wallpaperscraft.ru/image/single/devochka_dozhd_anime_153417_360x640.jpg') no-repeat center/cover",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}>
        <Typography variant="h4" align="center" color="#fff">
          Хочешь проверить как хорошо ты знаешь этого человека?
        </Typography>
        <Avatar
          alt="Евгения Криворучко"
          src={Ava}
          sx={{ width: 170, height: 170 }}
        />
      </Box>
      <ButtonGroup size="large" variant="contained" aria-label="yes_no">
        <Button>
          <Link to="/friend">ДА</Link>
        </Button>
        <Button color="secondary">
          <Link to="/not-friend">НЕТ</Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Home;
