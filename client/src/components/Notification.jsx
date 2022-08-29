import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { socketContext } from "../socketContext";

const Notification = () => {
  const { answerCall, callAccepted, call, leaveCall } =
    useContext(socketContext);
  return (
    <div>
      {call.isRecievedCall && !callAccepted && (
        <div>
          <h2>{call.name} is calling......</h2>
          <div style={{ display: "flex" }}>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer Call
            </Button>

            <Button
              style={{ marginLeft: "10px" }}
              variant="contained"
              color="secondary"
              onClick={leaveCall}
            >
              Reject Call
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
