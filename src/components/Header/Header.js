import React from 'react'

import Grid from '@material-ui/core/Grid'

import Nav from './Nav'
import Title from './Title'
import Location from './Location'
import ContactButton from './ContactButton'

function Header({ onClick }) {

  return(
    <Grid container justify='center'>
      <Grid container justift='center'> 
        <Grid item xs={2}>
          <Location/>
        </Grid>
        <Grid item xs={8}>
          <Title/>
        </Grid>
        <Grid item xs={2} style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ContactButton/>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Nav onClick={onClick}/>
      </Grid>
    </Grid>
  )
}

export default Header