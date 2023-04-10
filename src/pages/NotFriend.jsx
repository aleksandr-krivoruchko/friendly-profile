import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const NotFriend = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        background:
          "url('https://risovach.ru/upload/2014/11/mem/frai-v-panike_65955243_orig_.jpeg') no-repeat center/contain",
        backgroundColor: "#b5b8a8",
      }}>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <Link to="/">НАЗАД</Link>
      </Button>
    </Container>
  );
};

export default NotFriend;
