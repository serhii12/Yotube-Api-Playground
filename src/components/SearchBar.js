import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchText: '',
  };

  onInputChange = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      searchText: value,
    });
  };

  onFormSubmit = e => {
    const { searchText } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (searchText !== '') {
      onSubmit(searchText);
      return false;
    }
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="searchInput">Video Search</label>
            <input
              id="searchInput"
              type="text"
              onChange={this.onInputChange}
              value={searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}
