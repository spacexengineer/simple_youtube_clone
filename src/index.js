// packages
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// components
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDXFPxZk5Je4OSzwSwzLKNjgpD5nW3OPX0";

// configuration for youtube-api-search

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // default returns an arry of 5 'video objects'
    YTSearch(
      {
        key: API_KEY,
        term: "spacex"
      },
      videos => {
        this.setState({
          videos
        });
      }
    );
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
