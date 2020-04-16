import React from 'react'

import Grid from '@material-ui/core/Grid'

import ProjectNav from './ProjectNav'
import CoffeeMaps from './CoffeeMaps/CoffeeMaps'

function Portfolio() {

  return(
    <Grid container justify='center' style={{padding: '10px'}}>
      <Grid item xs={12}>
        <ProjectNav/>
      </Grid>
      <Grid item xs={12}>
        <CoffeeMaps/>
      </Grid>
    </Grid>
  )
}

export default Portfolio