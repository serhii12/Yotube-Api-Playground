import React, { Component } from 'react';
import yotube from '../api/yotube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSubmit = async searchText => {
    const response = await yotube.get('/search', {
      params: { q: searchText },
    });
    const videos = response.data.items;
    const selectedVideo = response.data.items[0];
    this.setState({ videos, selectedVideo });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmit} />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}
