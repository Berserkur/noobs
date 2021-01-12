import React from "react";
import Video from "./Video";

function Frame() {
  return (
    <div className="frame">
      <Video />
      <p className="video-title">Icelandic Fish Soup</p>
      <p className="video-composer">by Unnur Jonsdottir</p>
    </div>
  );
}

export default Frame;
