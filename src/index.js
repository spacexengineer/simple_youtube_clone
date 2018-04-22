// packages
import React from "react";
import ReactDOM from "react-dom";

// components
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDXFPxZk5Je4OSzwSwzLKNjgpD5nW3OPX0";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
