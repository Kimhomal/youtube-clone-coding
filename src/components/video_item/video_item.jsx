import React from 'react';
import {
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    wordBreak: 'break-word',
  },
  image: {
    // width: 128,
    // height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    overflow: 'hidden',
    display: 'box',
    boxOrient: 'vertical',
    height: '3rem',
    lineClamp: 2,
  },
  subtitle: {
    overflow: 'hidden',
    display: 'box',
    boxOrient: 'vertical',
    lineClamp: 1,
  },
  description: {
    overflow: 'hidden',
    display: 'box',
    boxOrient: 'vertical',
    height: '4rem',

    lineClamp: 3,
  },
}));

const VideoItem = (props) => {
  const classes = useStyles();

  const onVideoClick = (event) => {
    props.onVideoClick(props.video);
  };

  return (
    <Grid
      item
      lg={6}
      md={6}
      sm={12}
      className={classes.root}
      onClick={onVideoClick}
    >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                width={props.video.snippet.thumbnails.medium.width}
                height={props.video.snippet.thumbnails.medium.height}
                alt="thumbnail"
                src={props.video.snippet.thumbnails.medium.url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="subtitle1"
                >
                  {props.video.snippet.title}
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="body2"
                  gutterBottom
                >
                  {props.video.snippet.channelTitle}
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  color="textSecondary"
                >
                  {props.video.snippet.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {props.video.snippet.publishedAt}
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
