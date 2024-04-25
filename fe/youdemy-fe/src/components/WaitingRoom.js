import React, { useState } from "react";
import VideoRoom from "./VideoRoom";
export default function WaitingRoom() {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center flex-column">
        <h1>Virtual Call</h1>
        {!joined ? (
          <button
            className=" btn btn-outline-primary "
            onClick={() => setJoined(true)}
          >
            Join Room
          </button>
        ) : (
          <VideoRoom />
        )}
      </div>
    </>
  );
}
