import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { socketContext } from "../socketContext";

const useStyle = makeStyles((theme) => ({
  gridContainer: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  container: {
    margin: "2px 0",
    padding: 0,
    width: "600px",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },

  margin: {
    marginTop: "10px",
  },

  padding: {
    padding: "20px",
  },

  paper: {
    padding: "0 20px",
    border: "2px solid black",
  },
}));
const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(socketContext);
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                fullWidth
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField
                fullWidth
                label="ID to Call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  Hang up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
