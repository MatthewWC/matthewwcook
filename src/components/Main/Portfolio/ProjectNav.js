import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    height: theme.size.button.height,
    width: theme.size.button.width,
    padding: theme.paddings.small,
    margin: theme.margins.small,
    fontFamily: theme.fontFamily.title,
    color: theme.colors.white,
    backgroundImage: theme.backgroundImage.project
  }
}))

function ProjectNav({ onClick }) {
  const classes = useStyles()

  return(
    <Grid container justify='center'>
      <Button 
        className={classes.button} 
        variant='contained' 
        align='center'
        onClick={event => {
          onClick('coffee maps')
        }}>
        CoffeeMaps
      </Button>
      <Button
        className={classes.button} 
        variant='contained' 
        align='center'
        onClick={event => {
          onClick('adams family')
        }}>
        Adams Family 
      </Button>
    </Grid>
  )
}

export default ProjectNav