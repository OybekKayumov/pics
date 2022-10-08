import React from "react";
import axios from "axios";
import unspalsh from "../api/unspalsh";
import SearchBar from "./SearchBar";
import Validator from "../exercises/Validator";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit= async (term) => {
    console.log('App term: ', term);
    const response = await unspalsh.get('/search/photos', {
      params: { query: term },    
    })    

    console.log(response.data.results);
    console.log('this:', this);
    this.setState({ images: response.data.results });
  } 

  render () {  
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;

{/* <Validator></Validator> */}

// .then((response) => {
    //   console.log('response: ', response);
    //   console.log('response: ', response.data.results);
    // })