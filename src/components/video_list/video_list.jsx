import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoItem from '../video_item/video_item';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '64px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const VideoList = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root}>
        {props.videos.map((item) => (
          // <AlignItemsList key={item.id} item={item}></AlignItemsList>
          <VideoItem
            key={item.id}
            video={item}
            onVideoClick={props.selectVideo}
          ></VideoItem>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoList;
