import React from "react";
import SearchBar from "./SearchBar";
import Validator from "../exercises/Validator";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar>

      </SearchBar>  

      <Validator></Validator>
    </div>
  )
};

export default App;
