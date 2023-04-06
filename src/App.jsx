import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Friend from "./pages/Friend";
import NotFriend from "./pages/NotFriend";

function App() {
  return (
    <Container maxWidth="md">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/not-friend" element={<NotFriend />} />
      </Routes>
    </Container>
  );
}

export default App;
