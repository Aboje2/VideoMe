import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import Notification from "./components/Notification";

const useStyle = makeStyles((theme) => ({
  appbar: {
    borderRadius: 15,
    margin: "10px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    border: "2px solid black",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },

  image: {
    marginLeft: "15px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appbar} position="static" color="inherit">
        <Typography variant="h3" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};

export default App;
