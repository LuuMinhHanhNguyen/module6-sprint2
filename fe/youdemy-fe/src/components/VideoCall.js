// import AgoraRTC from "agora-rtc-sdk-ng";
import AgoraRTM from "agora-rtm-sdk";
import React, { useEffect, useState, useRef } from "react";

export default function VideoCall() {
  let localStream;
  let remoteStream;
  let peerConnection;
  let APP_ID = "ae4ec3955c264954a53d1f26b85d1e17";
  let token = String(Math.floor(Math.random() * 10000));
  let uid = String(Math.floor(Math.random() * 10000));

  useEffect(() => {
    first();
    // init();
  }, []);

  const options = {
    appId: "ec18fe6f54634b488220cf33b28b074b",
    token: null,
    channel: "channel-name", // Optional, if not specified elsewhere
    codec: "vp8", // Optional, adjust if needed
    mode: "rtc", // Optional, adjust if needed
    role: "host", // Optional, adjust if needed
  };

  const [users, setUsers] = useState([]);
  const rtc = useRef({
    client: null,
    localAudioTrack: null,
    localVideoTrack: null,
  });

  let client;
  let channel;

  let servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
  };

  const first = async () => {
    const script = document.createElement("script");
    script.src = "/js/agora-rtm-sdk-1.4.4.js";
    script.async = true;
    // script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
    console.log("hihih here");
    console.log(window.AgoraRTM);
    init();
  };

  const init = async () => {
    console.log(window.AgoraRTC);

    client = await window.AgoraRTM.createInstance(APP_ID);

    await client.login({ uid, token });

    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    document.getElementById("user-1").srcObject = localStream;
    createOffer();
  };

  const createOffer = async () => {
    peerConnection = new RTCPeerConnection(servers);
    remoteStream = new MediaStream();
    document.getElementById("user-2").srcObject = remoteStream;

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack();
      });
    };

    peerConnection.onicecandidate = async (event) => {
      if (event.candidate) {
        console.log("new icecandidate:", event.candidate);
      }
    };

    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    console.log("offffferrr");
    console.log("Offer: " + JSON.stringify(offer));
  };

  return (
    <>
      <div className=" flex row-cols-2 gap-5">
        <video id="user-1" className=" bg-black" autoPlay playsInline></video>
        <video id="user-2" autoPlay playsInline className=" bg-black"></video>
      </div>
    </>
  );
}
