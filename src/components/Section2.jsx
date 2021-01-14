import React from "react";
import Video12 from "./videos/Video12";
import Video13 from "./videos/Video13";
import Video14 from "./videos/Video14";
import Video15 from "./videos/Video15";
import Video16 from "./videos/Video16";
import Video17 from "./videos/Video17";
function Section1() {
  return (
    <div>
      <h1 className="section-headline">Style and Fashion under a minute</h1>
      <div className="category">
        {" "}
        <Video12 />
        <Video13 />
        <Video14 />
        <Video15 />
        <Video16 />
        <Video17 />
      </div>
    </div>
  );
}

export default Section1;
