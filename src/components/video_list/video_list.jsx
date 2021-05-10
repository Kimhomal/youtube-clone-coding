import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
  <ul>
    {props.videos.map((item) => (
      <VideoItem key={item.id} video={item}></VideoItem>
    ))}
  </ul>
);

export default VideoList;
