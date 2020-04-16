import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  typography: {
    fontFamily: theme.fontFamily.title
  }
}))

function Title() {  
  const classes = useStyles()

  return(
    <Grid container justify='center'>
      <Grid item xs={12}>
        <Typography className={classes.typography} align='center' variant='h2'>
          Matthew Cook
        </Typography>
        <Typography className={classes.typography} align='center' variant='h4'>
          Full Stack Web Developer
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Title