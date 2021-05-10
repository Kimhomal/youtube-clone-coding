import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../css/navbar.module.css';

const Navbar = (props) => (
  <AppBar position="fixed" className={styles['navbar-color']}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="open drawer">
        <MenuIcon></MenuIcon>
      </IconButton>
      <Typography noWrap>YOUTUBE</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
