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
import Ava from "../img/face.jpg";

const Home = () => {
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
          Хочешь проверить как хорошо ты знаешь свою подругу?
        </Typography>
        <Avatar
          alt="Евгения Криворучко"
          src={Ava}
          sx={{ width: 150, height: 150 }}
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
