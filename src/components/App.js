import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header/Header'
import Main from './Main/Main'

function App() {
  // state that changes current display from onclick portfolio/about me
  const [visibleComponent, setVisibleComponent] = React.useState(false)

  function onClick(event, buttonClicked){
    switch(buttonClicked){
      case 'portfolio':
        setVisibleComponent(buttonClicked)
        break
      default:
        break
    }
  }

  return (
    <Router>
      <Header onClick={onClick}/>
      <Switch>
        <Route exact path={'/'} render={props => <Main visibleComponent={visibleComponent} {...props} />}/>
      </Switch>
    </Router>
  )
}

export default App;
