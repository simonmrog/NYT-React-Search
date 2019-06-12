import React from "react";
import SearchBox from "./SearchBox";
import API from "../api/API";

import logo from "../images/nyt-logo.png";
import "./Main.css";


class Main extends React.Component {

  constructor (props) {
    super (props);

    this.state = {articles: []};
  }

  onSearchSubmit = (keywords, material) => {

    API.getArticles (keywords, material)
      .then (response => response.json())
      .then ((data) => {
        this.setState ({articles: data.response.docs}, () => {
          console.log (this.state.articles);
        });
      })
      .catch (err => alert (err));
  }

  renderContent = () => {

    if (this.state.articles.length === 0)
      return (
      <div className="main-wrapper">
          <div className="logo-wrapper">
            <img alt="logo" src={logo} />
          </div>
        <SearchBox onSubmit={this.onSearchSubmit}/>
      </div>
      );
    else
      return (<div>Holis</div>);
  }

  render () {
    //SI NO HAY NADA
    return (<div>{this.renderContent () }</div>);

      //SI HAY ALGO MANDO ESO AL SEARCH COMPONENT
  }
}

export default Main;