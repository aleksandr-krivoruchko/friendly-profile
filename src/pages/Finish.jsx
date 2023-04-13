import React from "react";
import useSound from "use-sound";
import { useScreenshot } from "use-react-screenshot";
import finishSound from "../sounds/finish-sound.mp3";

import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Finish = ({ data, userName, correctAnswers }) => {
  const ref = React.useRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [finish, { stop }] = useSound(finishSound);

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
        background:
          "url('https://media.giphy.com/media/AAB2V2zCEnZwLBHSne/giphy.gif') no-repeat center/cover",
      }}>
      <Box ref={ref}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: `${correctAnswers > data.length / 2 ? "green" : "#c04641"}`,
            fontSize: "30px",
            textShadow: `${
              correctAnswers > data.length / 2
                ? "7px 5px 10px #2BF044"
                : "7px 5px 10px #FFEDDE"
            }`,
          }}>
          <b style={{ textTransform: "uppercase", fontSize: "50px" }}>
            {userName}
          </b>
          <br />
          <br /> знает ЖЕНЮ на
        </Typography>

        <Typography
          sx={{
            color: `${correctAnswers > data.length / 2 ? "green" : "#c04641"}`,
            fontSize: "150px",
            marginTop: "50px",
            textShadow: `${
              correctAnswers > data.length / 2
                ? "7px 5px 10px #2BF044"
                : "7px 5px 10px #FFEDDE"
            }`,
          }}>
          {((correctAnswers / data.length) * 100).toFixed(0)}%
        </Typography>
      </Box>

      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
        }}>
        <img width="50%" height="50%" src={image} alt="Screenshot" />
      </Box> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        {/* <Button
          size="small"
          variant="contained"
          sx={{ marginBottom: "20px" }}
          color={`${correctAnswers > data.length / 2 ? "success" : "error"}`}
          onClick={() => takeScreenshot(ref.current)}>
          screenshot
        </Button> */}

        <Button size="small" variant="contained" color="secondary">
          <Link to="/friend">Еще разок ?</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Finish;
