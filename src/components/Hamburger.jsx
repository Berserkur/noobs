import React from "react";

function Hamburger() {
  return (
    <div id="menu-toggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Info</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default Hamburger;
