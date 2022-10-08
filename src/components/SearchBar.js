import React from "react";

class SearchBar extends React.Component {
  state = { term: ''}  

  // onFormSubmit = (e) => {
  //2
  onFormSubmit(e) {
    // no refresh all  pages when press Enter after input data
    e.preventDefault();

    // console.log(this.state.term); //! error
    console.log(this.state.term);
  }

  render () {
    return (
      // 2
      <div onSubmit={(e) => this.onFormSubmit(e)} className="ui segment">
     {/* <div onSubmit={this.onFormSubmit} className="ui segment"> */}
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
              type="text"               
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    ) 
  }
}

export default SearchBar;


// onChange={this.onInputChange} 


// onInputChange(event) {
//   console.log('event.target.value: ', event.target.value)
// }
