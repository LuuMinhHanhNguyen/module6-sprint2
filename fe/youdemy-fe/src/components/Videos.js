import React from "react";
import Video from "./Video";
import { useUsers } from "./GlobalContext";

export default function Videos() {
  const users = useUsers()[0];
  return (
    <div id="videos">
      {users.length &&
        users.map((user) => <Video key={user.uid} user={user} />)}
    </div>
  );
}
