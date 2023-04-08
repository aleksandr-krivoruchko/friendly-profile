import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  setCorrectAnswers,
}) => {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (questionNumber > data.length) {
      navigate("/finish");
    }
    setQuestion(data[questionNumber - 1]);
  }, [data, navigate, questionNumber]);

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
        background:
          "url('https://i.7fon.org/1000/c543383.jpg') no-repeat center/cover",
      }}>
      <Box
        sx={{
          width: "80%",
          height: "50%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Typography variant="h3" align="center" color="#fff">
          {question?.question}
        </Typography>

        {question?.answers.map((answer) => (
          <Typography
            key={answer.text}
            variant="p"
            align="center"
            color="#fff"
            sx={{
              fontSize: "26px",
              padding: "10px",
              cursor: "pointer",
              border: "1px solid #fff",
              borderRadius: "20px",
              backgroundColor: "rgba(248, 243, 246, 0.2)",
            }}
            onClick={() => handleClick(answer)}>
            {answer.text}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Trivia;
