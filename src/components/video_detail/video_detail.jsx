import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '64px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const VideoDetail = ({ video }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid item md={10}>
          hoho
        </Grid>
        <Grid item md={2}>
          chul
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoDetail;
