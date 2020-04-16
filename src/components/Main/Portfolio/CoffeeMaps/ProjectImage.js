import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.margins.small
  },
  paper: {
    padding: '5px',
    backgroundImage: theme.backgroundImage.project
  },  
  image: {
    width: '500px',
    height: '405px',
  }
}))

function ProjectImage() {
  const classes = useStyles()

  return(
    <Grid className={classes.root} container justify='center'>
      <Paper className={classes.paper}>
        <img className={classes.image} src='coffeemaps.png' alt='coffeemaps'/>
      </Paper>
    </Grid>
  )
}

export default ProjectImage