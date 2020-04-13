import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  avatar: {
    height: '175px',
    width: '175px',
    margin: 'auto',
    marginTop: theme.margins.small
  }
}))

function Picture() {
  const classes = useStyles()

  return(
    <Avatar className={classes.avatar} src='header_photo.JPG' alt='my_headshot'/>
  )
}

export default Picture