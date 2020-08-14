import React, { Component } from 'react';

class Search extends Component {
  state = {
    searchBoxText: '',
  };
  onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(this.state.searchBoxText);
  };
  onChangeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle} className="form">
          <input
            type="text"
            name="searchBoxText"
            placeholder="Search users..."
            value={this.state.searchBoxText}
            onChange={this.onChangeHandle}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
