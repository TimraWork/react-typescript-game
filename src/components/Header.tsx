import React from 'react';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';
import {Logo} from './parts/Logo';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import {Nav} from './parts/Nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    logo: {
      flexGrow: 1
    },
    appBar: {
      boxShadow: 'none',
      borderBottom: '1px solid ' + fade(theme.palette.primary.light, 0.35)
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography className={classes.logo}>
            <Logo />
          </Typography>
          <div className={classes.sectionDesktop}>
            <Nav />
            <IconButton className={classes.menuButton}>
              <SettingsIcon />
            </IconButton>

            <IconButton className={classes.menuButton}>
              <VolumeOffIcon />
            </IconButton>

            <IconButton className={classes.menuButton}>
              <FullscreenIcon />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton className={classes.menuButton} color="primary">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}