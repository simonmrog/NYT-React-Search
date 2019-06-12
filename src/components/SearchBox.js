import React from "react";
import "./SearchBox.css";

//We create a class-based-component as we need to manipulate states
class SearchBox extends React.Component {

  constructor (props) {
    super (props);
    //State corresponds to the text in the input and the chose in the select
    this.state = {keywords: "", material: ""};

    //Creating reference to access to the default value of the select
    this.select = React.createRef ();
  }

  //Changing state to capture the default value of the select
  //This is done in case the user never changes the option
  componentDidMount = () => {
    this.setState ({material: this.select.current.value}); 
  }

  //Updates state every time the user enters some text to the input
  onInputChange = (event) => {
    this.setState ({keywords: event.target.value});
  }

  //Updates the state every time the user chooses an option in the select
  onSelectChange = (event) => {
    this.setState ({material: event.target.value});
  }

  //Event to collect the info of the form once the user press the button
  searchArticles = (event) => {
    event.preventDefault (); //prevents the form to reload page
    //sends info to the Main.js function "onSearchSubmit"
    //we validate the user doesn't send info without keywords
    //This is done by spliting the array and joining it again withous
    //spaces
    if ((this.state.keywords).split(" ").join ("").length === 0)
      alert ("Please write a keyword for the search");
    else
      this.props.onSubmit (this.state.keywords, this.state.material);
  }

  //Renders the page every time the state is updated
  render () {

    return (
      <div className="search-box">
        <form onSubmit={this.searchArticles}>
          <div className="column">
            <label htmlFor="keywords">Keywords</label>
            <input
              id="keywords"
              type="text"
              value={this.state.keywords}
              onChange={this.onInputChange}
            />
          </div>
          <div className="column">
            <label>Types of Material</label>
            <select
              ref={this.select}
              /*value={this.state.material}*/
              onChange={this.onSelectChange}
              defaultValue="News"
            >
              <option value="">Addendum</option>
              <option value="">An Analysis</option>
              <option value="">An Appraisal</option>
              <option value="">Article</option>
              <option value="">Banner</option>
              <option value="">Biography</option>
              <option value="">Birth Notice</option>
              <option value="">Blog</option>
              <option value="">Brief</option>
              <option value="">Caption</option>
              <option value="">Chronology</option>
              <option value="">Column</option>
              <option value="">Correction</option>
              <option value="">Economic Analysis</option>
              <option value="">Editorial</option>
              <option value="">Editorial Cartoon</option>
              <option value="">Editors' Note</option>
              <option value="">First Chapter</option>
              <option value="">Front Page</option>
              <option value="">Glossary</option>
              <option value="">Interactive Feature</option>
              <option value="">Interactive Graphic</option>
              <option value="">Interview</option>
              <option value="">Letter</option>
              <option value="">List</option>
              <option value="">Marriage Announcement</option>
              <option value="">Military Analysis</option>
              <option value="News">News</option>
              <option value="">News Analysis</option>
              <option value="">Newsletter</option>
              <option value="">Obituary</option>
              <option value="">Obituary (Obit)</option>
              <option value="">Op-Ed</option>
              <option value="">Paid Death Notice</option>
              <option value="">Postscript</option>
              <option value="">Premium</option>
              <option value="">Question</option>
              <option value="">Quote</option>
              <option value="">Recipe</option>
              <option value="">Review</option>
              <option value="">Schedule</option>
              <option value="">SectionFront</option>
              <option value="">Series</option>
              <option value="">Slideshow</option>
              <option value="">Special Report</option>
              <option value="">Statistics</option>
              <option value="">Summary</option>
              <option value="">Text</option>
              <option value="">Video</option>
              <option value="">Web Log</option>
            </select>
          </div>
          <div className="column">
            <button className="submit-button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;