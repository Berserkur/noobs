import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
              size="x"
              icon={faSearch}
            />{" "}
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
