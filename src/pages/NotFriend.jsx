import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const NotFriend = () => {
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
        Ты мне не друг и просто уходи
      </Typography>
      <Button size="lg" variant="contained">
        <Link to="/">НАЗАД</Link>
      </Button>
    </Container>
  );
};

export default NotFriend;
