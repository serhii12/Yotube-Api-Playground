import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

export default class App extends Component {
  state = {
    videos: [],
  };

  render() {
    const { images } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar />
        <VideoList videos={images} />
      </div>
    );
  }
}
