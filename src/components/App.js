import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

export default class App extends Component {
  state = {
    videos: [],
  };

  onSubmit = searchText => {
    console.log(searchText);
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}
