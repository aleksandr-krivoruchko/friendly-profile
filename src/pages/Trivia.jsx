import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  setCorrectAnswers,
}) => {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  React.useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setQuestionNumber((prev) => prev + 1);
    if (answer.correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setSelectedAnswer(null);
  };

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
      <Typography variant="h3" align="center" color="primary">
        {question?.question}
      </Typography>

      {question?.answers.map((answer) => (
        <Typography
          variant="p"
          align="center"
          color={selectedAnswer === answer ? "red" : "primary"}
          sx={{ fontSize: "20px", padding: "10px" }}
          onClick={() => handleClick(answer)}>
          {answer.text}
        </Typography>
      ))}
    </Container>
  );
};

export default Trivia;
