import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render={(routerProps) => <ItemList {...routerProps} />}
            />
            {/* <Route 
              path="/detail/:avatarId"
              exact
              render={(routerProps) => <}
            /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

