import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { Container, Typography } from "@mui/material";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  setCorrectAnswers,
}) => {
  const navigate = useNavigate();
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [className, setClassName] = React.useState("answer");
  const [letsPlay] = useSound(play);
  const [correctPlay] = useSound(correct);
  const [wrongPlay] = useSound(wrong);

  const showCorrectAnswer = () => {
    const rightAnswer = question?.answers.find((a) => a.correct);
    document.querySelectorAll(".answer").forEach((a) => {
      if (a.textContent === rightAnswer.text) {
        a.classList.add("right-answer");
      }
    });
  };

  React.useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  React.useEffect(() => {
    if (questionNumber > data.length) {
      navigate("/finish");
    }
    setQuestion(data[questionNumber - 1]);
  }, [data, navigate, questionNumber]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");

    setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    }, 1000);

    setTimeout(() => {
      if (answer.correct) {
        correctPlay();
        setTimeout(() => {
          setCorrectAnswers((prev) => prev + 1);
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 3000);
      } else {
        wrongPlay();
        showCorrectAnswer();
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 3000);
      }
    }, 2500);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        background:
          "url('https://i.7fon.org/1000/c543383.jpg') no-repeat center/cover",
      }}>
      <Typography variant="h3" align="center" color="#fff">
        {question?.question}
      </Typography>

      {question?.answers.map((answer) => (
        <Typography
          key={answer.text}
          sx={{ fontSize: "30px" }}
          className={selectedAnswer === answer ? className : "answer"}
          onClick={() => handleClick(answer)}>
          {answer.text}
        </Typography>
      ))}
    </Container>
  );
};

export default Trivia;
