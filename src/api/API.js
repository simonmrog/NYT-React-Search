const API = {

  getArticles (keywords, material) {

    const endpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const key = "oLk6UUiiw0myuRsgSARoFWRtPHhqhAa2";
    const q = keywords.split (" ").join ("%20"); //query term
    const url = `${endpoint}?fq=type_of_material:%22${material}%22&q=${q}&page=0&api-key=${key}`;

    return (fetch (url));
  }

}

export default API;