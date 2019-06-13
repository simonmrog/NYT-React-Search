import React from "react";

import "../css/Article.css";

const Article = (props) => {

  const content = props.content;
  let thumbnail = "";
  
  if (content.multimedia.length > 0)
    thumbnail = "https://www.nytimes.com/" + content.multimedia[0].url;

  //Transforms the keyword object array to a string array with keywords
  const keywordsArray = content.keywords.map ((keywordsObject) => {
    return (keywordsObject.value + ",");
  });

  const searchByKeyword = (event) => {
    props.onSubmit (event.target.innerHTML, "News", 0);
  }

  //This function will generate the list of anchors for the keywords
  //of each result.
  const keywords = (keywordsArray) => {
      const DOMElement = keywordsArray.map ((keyword, index) => {
      return (
        <span key={index}>
          <span className="anchor" onClick={searchByKeyword}>
            {keyword}
          </span>
          <span> </span>
        </span>
      );
    });
    return (DOMElement);
  }

  return (
    <div className="article">
      <div className="thumbnail hidden">
        <img alt="thumbnail" src={thumbnail} />
      </div>
      <div className="content">
        <div className="headline">
          <a href={content.web_url}><h3>{content.headline.main}</h3></a>
        </div>
        <p className="snippet hidden">{content.snippet}</p>
        <p className="source"><strong>Source: </strong>{content.source}</p>
        <p className="date"><strong>Published: </strong>{content.pub_date}</p>
        <div className="keywords hidden">{keywords (keywordsArray)}</div>
      </div>
    </div>
  );
}

export default Article;