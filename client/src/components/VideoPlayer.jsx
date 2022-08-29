import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core";
import { socketContext } from "../socketContext";
const useStyle = makeStyles((theme) => ({
  video: {
    width: "450px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      height: "auto",
    },
  },

  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  paper: {
    padding: "5px",
    margin: "10px",
    border: " 2px solid black",
  },
}));

const VideoPlayer = () => {
  const { myVideo, userVideo, name, stream, call, callEnded, callAccepted } =
    useContext(socketContext);
  const classes = useStyle();
  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              className={classes.video}
              playsInline
              muted
              autoPlay
              ref={myVideo}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              className={classes.video}
              playsInline
              muted
              autoPlay
              ref={userVideo}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
