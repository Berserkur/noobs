import React from "react";

function Video() {
  return (
    <div className="video">
      <video
        className="video"
        poster="https://i0.wp.com/grapevine.is/wp-content/uploads/IMG_2750-e1445359443843.jpg?quality=99"
        controls
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Video;
