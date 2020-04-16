import React from 'react'

import Grid from '@material-ui/core/Grid'

import Portfolio from './Portfolio/Portfolio'

function Main({visibleComponent}) {
  if(visibleComponent === 'portfolio'){
    return(
      <Portfolio/>
    )
  }
  else{
    return(
      <Grid container>
      </Grid>
    )
  }
}

export default Main