import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../layout/header'
import Footer from '../layout/footer'
import { StyledMain } from '../styled-components/main'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import About from '../pages/About'
import GetStarted from '../pages/GetStarted'
import Error404 from '../pages/Error404'
import { people } from '../../data/people'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
        <StyledMain>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact render={(props) => <Search {...props} people={this.state.people} /> } />
            <Route path="/Login" exact component={Login} />
            <Route path="/Terms" exact component={Terms} />
            <Route path="/Privacy" exact component={Privacy} />
            <Route path="/About" exact component={About} />
            <Route path="/GetStarted" exact component={GetStarted} />
            <Route path="/" component={Error404} />
          </Switch>
        </StyledMain>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    )
  }
}

export default App