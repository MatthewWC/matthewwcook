import React from 'react'

import Grid from '@material-ui/core/Grid'

import ProjectImage from './ProjectImage'
import ProjectInfo from './ProjectInfo'


function CoffeeMaps() {

  return(
    <Grid container justify='center'>
      <Grid item md={6}>
        <ProjectImage/>
      </Grid>
      <Grid item md={6}>
        <ProjectInfo/>
      </Grid>
    </Grid>
  )
}

export default CoffeeMaps