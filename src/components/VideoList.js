import React from 'react';

const VideoList = ({ videos }) => (
  <div>{videos.map(el => console.log(el))}</div>
);

export default VideoList;
