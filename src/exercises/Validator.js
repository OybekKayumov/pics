import React from "react";

class Validator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { password: ''};
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
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
