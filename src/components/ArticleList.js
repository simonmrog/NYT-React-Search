import React from "react";
import Article from "./Article";

const ArticleList = (props) => {

  // console.log (props.content);

  const articles = props.content;
  // const x = <div>Hello</div> //REVISAR ESTO, PUEDE SER LA RESPUESTA
  // console.log (x);
  const articleList = articles.map ((article) => {
    return (
      <Article onSubmit={props.onSubmit} key={article._id} content={article} />
    );
  });

  return (
    <div>{articleList}</div>
  );

}

export default ArticleList;