import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { createRef } from "react";
import { useScreenshot } from "use-react-screenshot";

const Screenshot = () => {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  console.log(ref);
  console.log(image);

  return (
    <div ref={ref} style={{ backgroundColor: "red" }}>
      <img
        width="100%"
        height="100%"
        backgroundColor="red"
        src={image}
        alt="Screenshot"
      />
      {/* <div ref={ref} style={{ backgroundColor: "red" }}>
        <h1>use-react-screenshot</h1>
        <h2>qwdkjbjwdhgvwgvdhgwvdhgwdvgdhgvd</h2>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
        <Button size="small" variant="contained" color="secondary">
          <Link to="/friend">Еще разок ?</Link>
        </Button>
      </div> */}
      <div>
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => takeScreenshot(ref.current)}>
          Take screenshot
        </button>
      </div>
    </div>
  );
};

export default Screenshot;
