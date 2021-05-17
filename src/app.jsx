import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Navbar from './components/navbar';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query)
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    // component mount or state update event handler
    // console.log('useEffect');
    youtube
      .mostPopular()
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  }, [youtube]);

  return (
    <React.StrictMode>
      <Navbar onSearch={search}></Navbar>
      {selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>}
      <VideoList videos={videos} selectVideo={selectVideo}></VideoList>
    </React.StrictMode>
  );
}

export default App;
