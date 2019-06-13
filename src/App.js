import React from "react";

import API from "./api/API";
import SearchBox from "./components/SearchBox";
import ArticleList from "./components/ArticleList"

import "./css/App.css";

import logo from "./images/nyt-logo.png";

class App extends React.Component {

  constructor (props) {
    super (props);

    // The state has the articles array, the number of articles found
    //the status which tells whether the user made the first search
    //Also contains the keywords array, the material type and the offset
    //To carry the number of articles and the page we need to fetch from the API.
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

    // Event function for the form, sends the offset divided by ten, which
    // corresponds to the number of the page we're looking for in the API
    this.onSearchSubmit (
      this.state.keywords,
      this.state.material,
      (this.state.offset + 10) / 10
    );
  }

  onSearchSubmit = (keywords, material, page) => {

    // We return from the API class the promise from the fetch function.
    // then and catch functions are implemented, the first one to update
    // the state every time the user make a search.
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

    //Using conditional components the render is made. We use the 
    //status variable of state to control wheather the user made 
    //first search

    return (
      <div className={this.state.status ? "main-wrapper with-content" : "main-wrapper"}>
        <header className={this.state.status ? "with-content" : ""}>
          <div className={this.state.status ? "logo-wrapper hidden-content with-content" : "logo-wrapper"}>
            <img alt="logo" src={logo} />
          </div>
          <SearchBox onSubmit={this.onSearchSubmit}/> 
        </header>
        <div className={this.state.status ? "" : "hidden-content"}>
          <ArticleList
            onSubmit={this.onSearchSubmit}
            content={this.state.articles}
          /> 
          {/* Using the offset variable of state the number of articles is
          controlled */}
          <label className="message">Displaying {this.state.offset + 10} results of {this.state.hits} found.</label>
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