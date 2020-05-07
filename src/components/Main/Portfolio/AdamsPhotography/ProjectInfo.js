import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ReactIcon from '../Skills/ReactIcon'
import JsIcon from '../Skills/JsIcon'
import HtmlIcon from '../Skills/HtmlIcon'
import CssIcon from '../Skills/CssIcon'


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.margins.small,
    width: '500px',
    height: '100%',
    maxWidth: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  paper: {
    padding: theme.paddings.xSmall,
    height: '100%',
    width: '100%',
    backgroundImage: theme.backgroundImage.project
  },
  innerGrid: {
    padding: '10px', 
    backgroundImage: 'linear-gradient(#868f96, #596164)'
  },
  typography: {
    padding: theme.paddings.small,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.title,
  },
}))

function ProjectInfo() {
  const classes = useStyles()

  return(
    <Grid className={classes.root} container justify='center'>
      <Paper className={classes.paper}>
        <Typography className={classes.typography} align='center'>
          TECH STACK
        </Typography>
        <Grid className={classes.innerGrid} container justify='space-evenly'>
          <ReactIcon/>
          <JsIcon/>
          <HtmlIcon/>
          <CssIcon/>
        </Grid>
        <Typography className={classes.typography} align='center'>
          DESCRIPTION
        </Typography>
        <Paper >
          <Grid className={classes.innerGrid} container justify='space-evenly'>
            <Typography align='center'>
              Production photography website for a small family owned company. This was built with React
              and is a Front-End only website hosted through a Cloudflare worker.
            </Typography>
          </Grid>
        </Paper>
      </Paper>
    </Grid>
  )
}

export default ProjectInfo