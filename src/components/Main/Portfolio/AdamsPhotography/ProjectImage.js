import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.margins.small,
    width: '500px',
    height: '419px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '250px',
    }
  }, 
  paper: {
    padding: theme.paddings.xSmall,
    height: '100%',
    width: '100%',
    backgroundImage: theme.backgroundImage.project
  },
  image: {
    height: '100%',
    width: '100%'
  }
}))

function ProjectImage() {
  const classes = useStyles()

  return(
    <Grid 
      onClick={event => {
        event.preventDefault()
        window.open('http://theadamsfamilystudios.com/')
      }}
      className={classes.root} 
      container 
      justify='center'>
      <Paper className={classes.paper}>
        <img className={classes.image} src='adamsphotography.png' alt='adams'/>
      </Paper>
    </Grid>
  )
}

export default ProjectImage