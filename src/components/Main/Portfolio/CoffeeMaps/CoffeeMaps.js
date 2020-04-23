import React from 'react'

import Grid from '@material-ui/core/Grid'

import ProjectImage from './ProjectImage'
import ProjectInfo from './ProjectInfo'


function CoffeeMaps() {

  return(
    <Grid container justify='center'>
      <ProjectImage/>
      <ProjectInfo/>
    </Grid>
  )
}

export default CoffeeMaps