import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        background:
          "url('https://images.wallpaperscraft.ru/image/single/devochka_dozhd_anime_153417_360x640.jpg') no-repeat center/cover",
      }}>
      <Typography variant="h4" align="center" color="#fff">
        Хочешь проверить как хорошо ты знаешь свою подругу?
      </Typography>
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
