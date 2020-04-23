import React from 'react'

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
    backgroundImage: theme.backgroundImage.clickable,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  }
}))

function ContactButton() {
  const classes = useStyles()

  function sendEmail() {
    window.location = "mailto:matthew.w.cook94@gmail.com"
  }

  return(
    <Button 
      variant='contained' 
      className={classes.button} 
      onClick={event => {
        event.preventDefault()
        sendEmail()
      }}>
      Contact
    </Button>
  )
}

export default ContactButton