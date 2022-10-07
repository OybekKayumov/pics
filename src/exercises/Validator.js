import React from "react";

class Validator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { password: ''};
  }

  onFormSubmit(e) {
    // no refresh all pages when press Enter after input data
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Enter Password</label>
            <input 
              type="password" 
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          {this.state.password.length < 6 ? 'Password must be at least 6 characters' : ''}
        </form>
      </div>
    )
  }
}

export default Validator;
