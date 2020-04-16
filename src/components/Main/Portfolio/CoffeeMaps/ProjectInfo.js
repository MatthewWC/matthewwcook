import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TechStack from './TechStack'
import Description from './Description'


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.margins.small
  },
  paper: {
    width: '500px',
    height: '410px',
    backgroundImage: theme.backgroundImage.project,
    padding: '5px'
  },
  typography: {
    padding: theme.paddings.small,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.clickable
  },
}))

function ProjectInfo() {
  const classes = useStyles()

  // toggle description or tech stack
  return(
    <Grid className={classes.root} container justify='center'>
      <Paper className={classes.paper}>
        <Typography className={classes.typography} align='center'>
          TECH STACK
        </Typography>
        <TechStack/>
        <Typography className={classes.typography} align='center'>
          DESCRIPTION
        </Typography>
        <Description/>
      </Paper>
    </Grid>
  )
}

export default ProjectInfo