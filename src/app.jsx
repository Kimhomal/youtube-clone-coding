import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Layout from './components/layout';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // component mount or state update event handler
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyB6WW1_Fmz97FylhWX_Wu1fmMjuEptFhno',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <React.StrictMode>
      <Layout videos={videos} />
    </React.StrictMode>
  );
}

export default App;
