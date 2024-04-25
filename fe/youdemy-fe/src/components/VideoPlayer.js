import React, { useEffect, useRef } from "react";
export default function VideoPlayer({ user }) {
  const ref = useRef();
  useEffect(() => {
    user.videoTrack.play(ref.current);
    // user.audioTrack.play();
  }, []);
  return (
    <>
      <div className=" d-flex align-items-center flex-column">
        <div>UID: {user.uid}</div>
        <div ref={ref} style={{ height: "200px", width: "200px" }}></div>
      </div>
    </>
  );
}
