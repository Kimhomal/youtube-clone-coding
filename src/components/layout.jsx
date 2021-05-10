import React, { Component } from 'react';
import Navbar from './navbar';
import VideoList from './video_list/video_list';

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <VideoList videos={this.props.videos}></VideoList>
      </>
    );
  }
}

export default Layout;
