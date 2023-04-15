import React from "react";
import useSound from "use-sound";
import finishSoundNo from "../sounds/finish-sound.mp3";
import finishSoundYes from "../sounds/finish-fun.mp3";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Finish = ({ data, userName, whoAmI, correctAnswers }) => {
  const compareAnswers = correctAnswers > data.length / 1.6;
  const ref = React.useRef(null);
  const [finish, { stop }] = useSound(
    compareAnswers ? finishSoundYes : finishSoundNo
  );

  React.useEffect(() => {
    finish();

    return () => stop();
  }, [finish, stop]);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px 0 10px",
        margin: 0,
        background: `url(${
          !compareAnswers
            ? "https://media.giphy.com/media/AAB2V2zCEnZwLBHSne/giphy.gif"
            : "https://media0.giphy.com/media/Hs1ZdBBpaHO9y/giphy.gif"
        }) no-repeat center/cover`,
      }}>
      <Box ref={ref}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: `${compareAnswers ? "green" : "#c04641"}`,
            fontSize: "30px",
          }}>
          {whoAmI}
          <br />
          <b style={{ textTransform: "uppercase", fontSize: "50px" }}>
            {userName}
          </b>
          <br />
          знает тебя на
        </Typography>

        <Typography
          sx={{
            color: `${compareAnswers ? "green" : "#c04641"}`,
            fontSize: "150px",
            marginTop: "50px",
            textShadow: `${
              compareAnswers ? "7px 5px 10px #2BF044" : "7px 5px 10px #FFEDDE"
            }`,
          }}>
          {((correctAnswers / data.length) * 100).toFixed(0)}%
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Typography
          color={`${compareAnswers ? "black" : "white"}`}
          m={2}
          align="center">
          Делай скриншот и отправляй Женьке
        </Typography>
        <Button size="small" variant="contained" color="secondary">
          <Link to="/friend">Пройти еще разок</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Finish;
