import React from "react";
import Video6 from "./videos/Video6";
import Video7 from "./videos/Video7";
import Video8 from "./videos/Video8";
import Video9 from "./videos/Video9";
import Video10 from "./videos/Video10";
import Video11 from "./videos/Video11";
function Section1() {
  return (
    <div>
      <h1 className="section-headline">Health and Wellness under a minute</h1>
      <div className="category">
        {" "}
        <Video6 />
        <Video7 />
        <Video8 />
        <Video9 />
        <Video10 />
        <Video11 />
      </div>
    </div>
  );
}

export default Section1;
