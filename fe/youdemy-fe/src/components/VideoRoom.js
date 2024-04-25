import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import VideoPlayer from "./VideoPlayer";

export default function VideoRoom() {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const APP_ID = "ec18fe6f54634b488220cf33b28b074b";
  const token =
    "007eJxTYHhs/ULYKpxL+eCHyYJaVx6W5B7ks97XGnNXbUFXg0iY8C0FhtRkQ4u0VLM0UxMzY5MkEwsLIyOD5DRj4yQjiyQDc5OkjVPnpzYEMjL8YzNnYmSAQBCfhSEjMS+RgQEA+lAeNw==";
  const channel = "hana";
  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((prev) => [...prev, user]);
    }

    if (mediaType === "audio") {
      user.audioTrack.play();
    }
  };
  const handleUserLeft = (user) => {
    setUsers((prev) => prev.filter((el) => el.uid !== user.uid));
  };
  const handleInit = async () => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);
    const uid = await client.join(APP_ID, channel, token, null);
    const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    const [audioTrack, videoTrack] = tracks;
    setLocalTracks(tracks);
    setUsers((prev) => [...prev, { uid, videoTrack, audioTrack }]);

    await client.publish(tracks);
  };

  useEffect(() => {
    handleInit();
    return () => {
      console.log("cleannnn");
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);

      client.unpublish(localTracks).then(() => {
        client.leave();
      });
    };
  }, []);

  return (
    <>
      <div className=" d-flex">
        {users.map((el) => (
          <VideoPlayer key={el.uid} user={el}></VideoPlayer>
        ))}
      </div>
    </>
  );
}
