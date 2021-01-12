import React from "react";
import Frame from "./Frame";

function Section() {
  return (
    <div>
      <h1 className="section-headline">Cooking under a minute</h1>
      <div className="category">
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
      </div>
    </div>
  );
}

export default Section;
