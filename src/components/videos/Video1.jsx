import React from "react";

function Video1() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=300,272"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">Chorizo & mozzarella gnocchi bake</p>
      <p className="video-composer">By Marianne Turner</p>
    </div>
  );
}

export default Video1;
