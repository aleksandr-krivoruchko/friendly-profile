import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Friend from "./pages/Friend";
import NotFriend from "./pages/NotFriend";
import Trivia from "./pages/Trivia";
import Finish from "./pages/Finish";
import Results from "./pages/Results";

function App() {
  const [userName, setUserName] = React.useState("Чубака");
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const data = [
    {
      id: 1,
      question: "Любимый цвет",
      answers: [
        { text: "Красный", correct: false },
        { text: "Черный", correct: true },
        { text: "Синий", correct: false },
      ],
    },
    {
      id: 2,
      question: "Любимое домашнее животное",
      answers: [
        { text: "Собака", correct: false },
        { text: "Кот", correct: true },
        { text: "Папа", correct: false },
      ],
    },
    {
      id: 3,
      question: "Любимый вид спорта",
      answers: [
        { text: "Футбол", correct: false },
        { text: "Бадминтон", correct: false },
        { text: "Волейбол", correct: true },
      ],
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ padding: "0px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/friend"
          element={
            <Friend
              setUserName={setUserName}
              setQuestionNumber={setQuestionNumber}
              setCorrectAnswers={setCorrectAnswers}
            />
          }
        />
        <Route
          path="/trivia"
          element={
            <Trivia
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setCorrectAnswers={setCorrectAnswers}
              setSelectedAnswer={setSelectedAnswer}
            />
          }
        />
        <Route
          path="/finish"
          element={
            <Finish
              data={data}
              userName={userName}
              setUserName={setUserName}
              correctAnswers={correctAnswers}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              data={data}
              userName={userName}
              selectedAnswer={selectedAnswer}
              questionNumber={questionNumber}
            />
          }
        />
        <Route path="*" element={<NotFriend />} />
      </Routes>
    </Container>
  );
}

export default App;
