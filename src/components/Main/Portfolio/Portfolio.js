import React from 'react'

import Grid from '@material-ui/core/Grid'

import ProjectNav from './ProjectNav'
import CoffeeMaps from './CoffeeMaps/CoffeeMaps'
import AdamsPhotography from './AdamsPhotography/AdamsPhotography'

function Portfolio() {

  const [ currentProject, setCurrentProject ] = React.useState('coffee maps')

  const onClick = (project) => {
    setCurrentProject(project)
  }

  return(
    <Grid container justify='center' style={{padding: '10px'}}>
      <Grid item xs={12} >
        <ProjectNav onClick={onClick}/>
      </Grid>
      <Grid item xs={12}>
        {currentProject === 'coffee maps' ? <CoffeeMaps/> : <AdamsPhotography/>}
      </Grid>
    </Grid>
  )
}

export default Portfolio