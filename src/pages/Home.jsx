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
      }}>
      <Typography variant="h4" align="center" color="primary">
        Хочешь проверить как хорошо ты знаешь свою подругу?
      </Typography>
      <ButtonGroup size="large" variant="contained" aria-label="yes_no">
        <Button>
          <Link to="/friend">ДА</Link>
        </Button>
        <Button>
          <Link to="/not-friend">НЕТ</Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Home;
