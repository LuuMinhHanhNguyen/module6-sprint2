import React, { useEffect, useRef } from "react";
export default function Video({ user }) {
  const playVideo = () => {
    user.videoTrack.play(vidDiv.current);
  };
  const stopVideo = () => {
    user.videoTrack.stop();
  };
  useEffect(() => {
    playVideo();
    return () => {
      stopVideo();
    };
  }, []);

  // Import React, useEffect, and useRef

  // Display a single video stream and handle cleanup:

  const vidDiv = useRef(null);

  // ... (Functions for playing and stopping the video stream)

  useEffect(() => {
    playVideo();
    return () => {
      stopVideo();
    };
  }, []);

  return (
    <div className="video-container">
      <div ref={vidDiv} />
      {/* Render controls if needed */}
    </div>
  );
}
