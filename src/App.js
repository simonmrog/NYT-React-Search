import React from "react";

import API from "./api/API";
import SearchBox from "./components/SearchBox";
import ArticleList from "./components/ArticleList"

import "./css/App.css";

import logo from "./images/nyt-logo.png";

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      articles: [],
      hits: 0,
      status: 0,
      keywords: [],
      material: "",
      offset: 0
    };
  }

  showMore = () => {

    this.onSearchSubmit (
      this.state.keywords,
      this.state.material,
      (this.state.offset + 10) / 10
    );
  }

  onSearchSubmit = (keywords, material, page) => {

    API.getArticles (keywords, material, page)
      .then (response => response.json())
      .then ((data) => {
          this.setState ({
            articles: page > 0 ?
              this.state.articles.concat (data.response.docs)
              : data.response.docs,
            hits: data.response.meta.hits,
            status: 1,
            keywords: keywords,
            material: material,
            offset: page * 10
          });
      })
      .catch (err => alert (err));
  }

  renderContent = () => {

    return (
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <img alt="logo" src={logo} />
        </div>
        <SearchBox onSubmit={this.onSearchSubmit}/> 
        <div className={this.state.status ? "" : "hidden-content"}>
          <ArticleList
            onSubmit={this.onSearchSubmit}
            content={this.state.articles}
          />
          <label>Displaying {this.state.offset + 10} results of {this.state.hits} found.</label>
          <button className="button more-button" onClick={this.showMore}>Get More News</button>
        </div>
      </div>
    );
  }

  render () {
    return (<div>{this.renderContent () }</div>);
  }
}

export default App;