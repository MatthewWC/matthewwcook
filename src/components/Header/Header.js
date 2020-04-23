import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './Nav'
import Title from './Title'
import Location from './Location'
import ContactButton from './ContactButton'

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: 'flex', 
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  locationContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}))

function Header({ onClick }) {
  const classes = useStyles()

  return(
    <Grid container justify='center'>
      <Grid container justift='center'> 
        <Grid className={classes.locationContainer} item sm={2}>
          <Location/>
        </Grid>
        <Grid container justify='center' item sm={8}>
          <Title/>
        </Grid>
        <Grid className={classes.buttonContainer} item sm={2}>
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