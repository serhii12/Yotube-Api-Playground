import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchText: '',
  };

  render() {
    const { searchText } = this.state;
    return <div className="ui segment" />;
  }
}
