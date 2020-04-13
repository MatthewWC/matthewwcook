import React from 'react'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.margins.small,
    height: '50%',
  }
}))

function ContactButton() {
  const classes = useStyles()

  return(
    <Button
      className={classes.button}
      variant='contained'
      onClick={event => {
        window.location.replace('/aboutme')
      }}>
      About Me
    </Button>
  )
}

export default ContactButton