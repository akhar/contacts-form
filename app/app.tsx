import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { List } from './views/List'
import { Add } from './views/Add'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
