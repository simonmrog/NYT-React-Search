import React from "react";

import SearchBox from "./SearchBox";
import logo from "../images/nyt-logo.png";

const Main = function () {

  return (
    <div className="main-wrapper">
        <div className="logo-wrapper">
          <img alt="logo" src={logo} />
        </div>
      <SearchBox onSubmit={this.onSearchSubmit}/>
    </div>
    );
}

export default Main;