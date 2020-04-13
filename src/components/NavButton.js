import React from 'react'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    margin: theme.margins.small
  }
}))

function NavButton({ name, link }) {
  const classes = useStyles()

  return(
    <Button
      className={classes.button}
      variant='contained'>
      {name}
    </Button>
  )
}

export default NavButton