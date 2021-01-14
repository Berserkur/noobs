import React from "react";

function Video3() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg?quality=90&webp=true&resize=300,272"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">Easy classic lasagne</p>
      <p className="video-composer">By Angela Boggiano</p>
    </div>
  );
}

export default Video3;
