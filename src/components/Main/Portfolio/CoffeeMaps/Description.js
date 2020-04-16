import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: theme.backgroundImage.clickable,
    height: '55%'
  },
  typography: {
    padding: theme.paddings.medium,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.text
  }
}))

function Description() {
  const classes = useStyles()

  return(
    <Grid className={classes.root} container justify='center'>
      <Typography className={classes.typography} align='center'>
        Although rough around the edges, this was my first true
        full stack application. Using Docker, DigitalOcean and Cloudflare
        This website was a great stepping stone in learning the ins and outs
        of basic to intermediate skills in development.
      </Typography>
    </Grid>
  )
}

export default Description