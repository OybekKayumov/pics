import React from "react";
import SearchBar from "./SearchBar";
import Validator from "../exercises/Validator";

// const App = () => {
class App extends React.Component {
  onSearchSubmit(term) {
    console.log('App term: ', term);
  } 

  render () {  
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}>
        </SearchBar>
      </div>
    )
  }
}

export default App;

{/* <Validator></Validator> */}