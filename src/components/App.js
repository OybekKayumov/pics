import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Validator from "../exercises/Validator";

// const App = () => {
class App extends React.Component {
  async onSearchSubmit(term) {
    console.log('App term: ', term);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID Access_Key'
      }
    })
    // .then((response) => {
    //   console.log('response: ', response);
    //   console.log('response: ', response.data.results);
    // })

    console.log(response.data.results);
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