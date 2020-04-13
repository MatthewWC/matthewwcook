import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.margins.small
  }
}))

function Location() {
  const classes = useStyles()

  return(
    <Typography className={classes.typography}>
      Atlanta, GA
    </Typography>
  )
}

export default Location