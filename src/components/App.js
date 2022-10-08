import React from "react";
import unspalsh from "../api/unspalsh";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import ListBuilding from "../exercises/ListBuilding";


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
        <ImageList images={this.state.images}/>

        <ListBuilding />
      </div>
    )
  }
}

export default App;

// eslint-disable-next-line
{/* <Validator></Validator> */}
// import axios from "axios";
// import Validator from "../exercises/Validator";

// .then((response) => {
    //   console.log('response: ', response);
    //   console.log('response: ', response.data.results);
    // })