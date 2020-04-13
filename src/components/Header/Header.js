import React from 'react'

import Grid from '@material-ui/core/Grid'

import Picture from './Picture'
import Title from './Title'
import ContactButton from './ContactButton'
import Location from './Location'
import NavButton from '../NavButton'

function Header() {

  return(
    <Grid container justify='center'>
      <Grid item xs={4}>
        <Location/>
      </Grid>
      <Grid item xs={4}>
        <Picture/>
      </Grid>
      <Grid item xs={4} style={{display: 'flex', justifyContent: 'flex-end', height: '25%'}}>
        <ContactButton/>
      </Grid>
      <Grid style={{backgroundColor: 'orange'}} container justify='space-evenly'>
        <Grid item xs={1}>
          <NavButton name='Portfolio'/>
        </Grid>
        <Grid item xs={1}>
          <NavButton name='Resume'/>
        </Grid>
        <Grid item xs={4}>
          <Title/>
        </Grid>
        <Grid item xs={1}>
          <NavButton name='Github'/>
        </Grid>
        <Grid item xs={1}>
          <NavButton name='About Me'/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header