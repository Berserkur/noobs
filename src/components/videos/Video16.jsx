import React from "react";

function Video16() {
  return (
    <div className="frame">
      <div className="video">
        <video
          className="video"
          poster="https://www.lorealparisusa.com/~/media/images/lop/home/beauty-library/articles/blush-by-face-shape/loreal-paris-bmag-article-how-to-apply-blush-based-on-your-face-shape-m.jpg?thn=0"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p className="video-title">Blush Tips</p>
      <p className="video-composer">By Good Food team</p>
    </div>
  );
}

export default Video16;
