import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <div>
      <header>
        <h1 className="logo">Noobs</h1>
        <form className="search" action="">
          <input type="search" className="search-box" placeholder="Search" />
          <button type="submit">
            {" "}
            <FontAwesomeIcon
              className="search-icon"
              size="1x"
              icon={faSearch}
            />{" "}
          </button>
        </form>
        <a href="" className="login">
          Login
        </a>
        <Hamburger />
      </header>
    </div>
  );
}

export default Header;
