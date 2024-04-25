import React, { useState, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

import Videos from "./Videos";
import { useStart, GlobalProvider } from "./GlobalContext";
export default function Container() {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useStart();

  const [token, setToken] = useState(null);

  const options = {
    // Pass your app ID here.
    appId: process.env.REACT_APP_AGORA_APP_ID,
    // Set the channel name.
    channel: "Agora_Default_Channel",
    uid: 0,
  };
  const rtc = useRef({
    client: null,
    localAudioTrack: null,
    localVideoTrack: null,
  });

  let init = async (name) => {
    rtc.current.client = AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    });
    initClientEvents();
    const uid = await rtc.current.client.join(
      options.appId,
      name,
      options.token,
      null
    );
    // Create an audio track from the audio sampled by a microphone.
    rtc.current.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Create a video track from the video captured by a camera.
    rtc.current.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    //Adding a User to the Users State
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          uid: uid,
          audio: true,
          video: true,
          client: true,
          videoTrack: rtc.current.localVideoTrack,
        },
      ];
    });
    //Publishing your Streams
    await rtc.current.client.publish([
      rtc.current.localAudioTrack,
      rtc.current.localVideoTrack,
    ]);
    setStart(true);
  };

  const initClientEvents = () => {
    rtc.current.client.on("user-published", async (user, mediaType) => {
      // New User Enters
      await rtc.current.client.subscribe(user, mediaType);
      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        setUsers((prevUsers) => {
          return [
            ...prevUsers,
            {
              uid: user.uid,
              audio: user.hasAudio,
              video: user.hasVideo,
              client: false,
              videoTrack: remoteVideoTrack,
            },
          ];
        });
      }

      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
        setUsers((prevUsers) => {
          return prevUsers.map((User) => {
            if (User.uid === user.uid) {
              return { ...User, audio: user.hasAudio };
            }
            return User;
          });
        });
      }
    });

    rtc.current.client.on("user-unpublished", (user, type) => {
      //User Leaves
      if (type === "audio") {
        setUsers((prevUsers) => {
          return prevUsers.map((User) => {
            if (User.uid === user.uid) {
              return { ...User, audio: !User.audio };
            }
            return User;
          });
        });
      }
      if (type === "video") {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      }
    });
  };

  return (
    <>
      <GlobalProvider>
        <Videos users={users} />
      </GlobalProvider>
    </>
  );
}
