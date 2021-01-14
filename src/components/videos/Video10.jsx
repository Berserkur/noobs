import React from "react";

function Video10() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Triathlon/Galleries/10+Elements/1.jpg"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">Swimming form</p>
      <p className="video-composer">By Good Food team</p>
    </div>
  );
}

export default Video10;
