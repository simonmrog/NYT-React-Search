import React from "react";
import Article from "./Article";

const ArticleList = (props) => {

  const articles = props.content;

  //Maps from an array of objects to an array of jsx components to 
  //render in the screen, the id of each article is used as key and
  //the article is sent as prop to the Article class.
  const articleList = articles.map ((article) => {
    return (
      <Article onSubmit={props.onSubmit} key={article._id} content={article} />
    );
  });

  //Renders the articles
  return (
    <div>{articleList}</div>
  );

}

export default ArticleList;