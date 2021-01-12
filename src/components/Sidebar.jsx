import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <a href="#">
        <FontAwesomeIcon className="icon" size="2x" icon={faVideo} />
      </a>
      <a href="#">
        {" "}
        <FontAwesomeIcon className="icon" size="2x" icon={faPlus} />
      </a>
      <a href="#">
        {" "}
        <FontAwesomeIcon className="icon" size="2x" icon={faStickyNote} />
      </a>
      <a href="#">
        {" "}
        <FontAwesomeIcon className="icon" size="2x" icon={faTag} />
      </a>
      <a href="#">
        {" "}
        <FontAwesomeIcon className="icon" size="2x" icon={faCommentDots} />
      </a>
    </div>
  );
}

export default Sidebar;
