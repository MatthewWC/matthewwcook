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
    fontFamily: theme.fontFamily.clickable,
    color: theme.colors.white,
    backgroundImage: theme.backgroundImage.clickable
  }
}))

function Footer({ onClick }) {
  const classes = useStyles()


  return(
    <Grid container justify='center'>
        <Button 
          className={classes.button}
          onClick={event => {
            window.open('https://github.com/MatthewWC')
          }}>
          Github
        </Button>
        <Button 
          className={classes.button}
          onClick={event => {
            window.open('https://www.linkedin.com/in/matthew-cook-995190150/')
          }}>
          Linkedin
        </Button>
        <Button 
          className={classes.button}
          onClick={event => {
            window.open('https://docs.google.com/document/d/1nllIhcUOpCatNvnm_psHiSLfCO-wAlYh9z7cc6D-GV0/edit')
          }}>
          Resume
        </Button>
        <Button className={classes.button} onClick={event => { onClick(event, 'portfolio')}}>
          Portfolio
        </Button>
    </Grid>
  )
}

export default Footer