import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home'

// header with name and title
// nav for resume, linkedin, github, portfolio, about me
// resume is link to google drive,
// button for linkedin,
// button for github,
// portfolio is a page that has links to completed work
// about me is page briefly about myself
// picture of myself

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path={'/'} render={props => <Home {...props} />}/>
      </Switch>
    </Router>
  )
}

export default App;
