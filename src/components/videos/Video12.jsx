import React from "react";

function Video12() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="data:image/jpeg;base64,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"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">How to do your Eyeliner</p>
      <p className="video-composer">By Jennifer Joyce</p>
    </div>
  );
}

export default Video12;