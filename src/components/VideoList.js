import React from 'react';
import VideoItem from './VideoItem';
// import './VideoItem.css';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
