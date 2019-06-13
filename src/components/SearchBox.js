import React from "react";
import "../css/SearchBox.css";

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
      this.props.onSubmit (this.state.keywords, this.state.material, 0);
  }

  //Renders the page every time the state is updated
  render () {

    return (
      <div className="search-box">
        <form onSubmit={this.searchArticles}>
          <div className="column keywords">
            <label htmlFor="keywords">Keywords</label>
            <input
              id="keywords"
              type="text"
              value={this.state.keywords}
              onChange={this.onInputChange}
            />
          </div>
          <div className="column material">
            <label>Types of Material</label>
            <select
              ref={this.select}
              /*value={this.state.material}*/
              onChange={this.onSelectChange}
              defaultValue="News"
            >
              <option value="Addendum">Addendum</option>
              <option value="An%20Analysis">An Analysis</option>
              <option value="An%20Appraisal">An Appraisal</option>
              <option value="Article">Article</option>
              <option value="Banner">Banner</option>
              <option value="Biography">Biography</option>
              <option value="Birth%20Notice">Birth Notice</option>
              <option value="Blog">Blog</option>
              <option value="Brief">Brief</option>
              <option value="Caption">Caption</option>
              <option value="Chronology">Chronology</option>
              <option value="Column">Column</option>
              <option value="Correction">Correction</option>
              <option value="Economic%20Analysis">Economic Analysis</option>
              <option value="Editorial">Editorial</option>
              <option value="Editorial%20Cartoon">Editorial Cartoon</option>
              <option value="Editors%27%20Note">Editors' Note</option>
              <option value="First%20Chapter">First Chapter</option>
              <option value="Front%20Page">Front Page</option>
              <option value="Glossary">Glossary</option>
              <option value="Interactive%20Feature">Interactive Feature</option>
              <option value="Interactive%20Graphic">Interactive Graphic</option>
              <option value="Interview">Interview</option>
              <option value="Letter">Letter</option>
              <option value="List">List</option>
              <option value="Marriage%20Announcement">Marriage Announcement</option>
              <option value="Military%20Analysis">Military Analysis</option>
              <option value="News">News</option>
              <option value="News%20Analysis">News Analysis</option>
              <option value="Newsletter">Newsletter</option>
              <option value="Obituary">Obituary</option>
              <option value="Obituary%20%28Obit%29">Obituary (Obit)</option>
              <option value="Op%2DEd">Op-Ed</option>
              <option value="Paid%20Death%20Notice">Paid Death Notice</option>
              <option value="Postscript">Postscript</option>
              <option value="Premium">Premium</option>
              <option value="Question">Question</option>
              <option value="Quote">Quote</option>
              <option value="Recipe">Recipe</option>
              <option value="Review">Review</option>
              <option value="Schedule">Schedule</option>
              <option value="SectionFront">SectionFront</option>
              <option value="Series">Series</option>
              <option value="Slideshow">Slideshow</option>
              <option value="Special%20Report">Special Report</option>
              <option value="Statistics">Statistics</option>
              <option value="Summary">Summary</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
              <option value="Web%20Log">Web Log</option>
            </select>
          </div>
          <div className="column">
            <button className="button submit-button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;