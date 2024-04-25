import React from "react";

export default function Controls() {
  const leaveChannel = async () => {
    // Destroy the local audio and video tracks.
    await rtc.current.localAudioTrack.close();
    await rtc.current.localVideoTrack.close();
    await rtc.current.client.leave();
    setUsers([]);
    setStart(false);
  };

  const mute = (type, id) => {
    if (type === "audio") {
      setUsers((prevUsers) => {
        return prevUsers.map((user) => {
          if (user.uid === id) {
            user.client && rtc.current.localAudioTrack.setEnabled(!user.audio);
            return { ...user, audio: !user.audio };
          }
          return user;
        });
      });
    } else if (type === "video") {
      setUsers((prevUsers) => {
        return prevUsers.map((user) => {
          if (user.uid === id) {
            user.client && rtc.current.localVideoTrack.setEnabled(!user.video);
            return { ...user, video: !user.video };
          }
          return user;
        });
      });
    }
  };
  return (
    <>
      <Videos></Videos>
    </>
  );
}
