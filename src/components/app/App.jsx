import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import DetailPage from '../DetailPage/DetailPage';

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
            <Route 
              path="/detail/:avatarId"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router> 
      </>
    );
  }
}



