const API = {

  getArticles (keywords, material, page) {

    const endpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const key = "oLk6UUiiw0myuRsgSARoFWRtPHhqhAa2";
    //Splits the keyword arrray and joins according to the url encoding reference
    const q = keywords.split (" ").join ("%20"); //query term
    const url = `${endpoint}?fq=type_of_material:%22${material}%22&q=${q}&page=${page}&api-key=${key}`;

    return (fetch (url)); //returns the promise
  }

}

export default API;