import React from "react";
import Video from "./videos/Video";
import Video1 from "./videos/Video1";
import Video2 from "./videos/Video2";
import Video3 from "./videos/Video3";
import Video4 from "./videos/Video4";
import Video5 from "./videos/Video5";
function Section() {
  return (
    <div>
      <h1 className="section-headline">Cooking under a minute</h1>
      <div className="category">
        {" "}
        <Video />
        <Video1 />
        <Video2 />
        <Video3 />
        <Video4 />
        <Video5 />
      </div>
    </div>
  );
}

export default Section;
