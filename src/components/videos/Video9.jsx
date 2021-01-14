import React from "react";

function Video9() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="https://media.self.com/photos/5a305b43e1ef6d3e6b8801bf/master/pass/2_7self.jpg"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">Stretching Exercise</p>
      <p className="video-composer">By Good Food team</p>
    </div>
  );
}

export default Video9;
