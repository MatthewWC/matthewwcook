import React from 'react'

import Grid from '@material-ui/core/Grid'

import ReactIcon from '../Skills/ReactIcon'
import NodeIcon from '../Skills/NodeIcon'
import JsIcon from '../Skills/JsIcon'
import HtmlIcon from '../Skills/HtmlIcon'
import CssIcon from '../Skills/CssIcon'

function TechStack() {
  return(
    <Grid style={{ padding: '10px', backgroundImage: 'linear-gradient(#868f96, #596164)'}} container justify='space-evenly'>
      <ReactIcon/>
      <NodeIcon/>
      <JsIcon/>
      <HtmlIcon/>
      <CssIcon/>
    </Grid>
  )
}

export default TechStack