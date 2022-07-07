import React, { useState, useEffect } from "react";
import axios from "axios";

function PostHeader() {
  const [pseudo, setpseudo] = useState("");
  const [time, setTime] = useState("");
  const createdAt = new Date();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => setpseudo(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="post-header">
      <div className="post-pseudo" pseudo={pseudo} >salut</div>
      <div className="post-time" />
    </div>
  );
}

export default PostHeader;
