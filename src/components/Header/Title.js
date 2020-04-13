import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function Title() {
  return(
    <Grid container justify='center'>
      <Grid item xs={12}>
        <Typography align='center' variant='h6'>
          Matthew Cook
        </Typography>
      </Grid>
      <Typography align='center' variant='h5'>
        Full Stack Web Developer
      </Typography>
    </Grid>
  )
}

export default Title