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
  const [userName, setUserName] = React.useState("NoName");
  const [whoAmI, setWhoAmI] = React.useState("незнакомец");
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const data = [
    {
      id: 1,
      question: "Месяц рождения",
      answers: [
        { text: "Июнь", correct: true },
        { text: "Март", correct: false },
        { text: "Сентябрь", correct: false },
        { text: "Январь", correct: false },
      ],
    },
    {
      id: 2,
      question: "Текущий класс школы ",
      answers: [
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "8", correct: true },
        { text: "9", correct: false },
      ],
    },

    {
      id: 3,
      question: "Любимое домашнее животное",
      answers: [
        { text: "Собака", correct: false },
        { text: "Кот", correct: true },
        { text: "Папа", correct: false },
        { text: "Тараканы", correct: false },
      ],
    },
    {
      id: 4,
      question: "Любимый цвет",
      answers: [
        { text: "Красный", correct: false },
        { text: "Черный", correct: true },
        { text: "Синий", correct: false },
        { text: "Зеленый", correct: false },
      ],
    },
    {
      id: 5,
      question: "Любимый вид спорта",
      answers: [
        { text: "Футбол", correct: false },
        { text: "Бадминтон", correct: false },
        { text: "Волейбол", correct: true },
        { text: "Керлинг", correct: false },
      ],
    },

    {
      id: 6,
      question: "Самый большой страх",
      answers: [
        { text: "Одиночество", correct: true },
        { text: "Мама", correct: false },
        { text: "Темнота", correct: false },
        { text: "Высота", correct: false },
      ],
    },
    {
      id: 7,
      question: "Любимая социальная сеть",
      answers: [
        { text: "Инстаграмм", correct: false },
        { text: "Вконтакте", correct: false },
        { text: "Фейсбук", correct: false },
        { text: "Тик-ток", correct: true },
      ],
    },
    {
      id: 8,
      question: "Любимый школьный предмет",
      answers: [
        { text: "История", correct: false },
        { text: "Химия", correct: false },
        { text: "Алгебра", correct: true },
        { text: "Биология", correct: false },
      ],
    },
    {
      id: 9,
      question: "Любимая компьютерная игра",
      answers: [
        { text: "Майнкрафт", correct: false },
        { text: "Фортнайт", correct: false },
        { text: "Роблокс", correct: true },
        { text: "Сапер", correct: false },
      ],
    },
    {
      id: 10,
      question: "Любимый мультфильм",
      answers: [
        { text: "Дом совы", correct: true },
        { text: "Рок Дог", correct: false },
        { text: "Кот в сапогах", correct: false },
        { text: "Холодное сердце", correct: false },
      ],
    },
    {
      id: 11,
      question: "Любимый напиток",
      answers: [
        { text: "Кока-кола", correct: false },
        { text: "Фанта", correct: false },
        { text: "Чай", correct: true },
        { text: "Томатный сок", correct: false },
      ],
    },

    {
      id: 12,
      question: "Будущая профессия",
      answers: [
        { text: "Дизайнер одежды", correct: false },
        { text: "Психолог", correct: true },
        { text: "Космонавт", correct: false },
        { text: "Ветеринар", correct: false },
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ padding: "0px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/friend"
          element={
            <Friend
              setUserName={setUserName}
              whoAmI={whoAmI}
              setWhoAmI={setWhoAmI}
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
              whoAmI={whoAmI}
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
