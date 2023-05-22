// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize= 27;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pagesize={this.pageSize} country="us" catagory="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pagesize={this.pageSize} country="us" catagory="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pagesize={this.pageSize} country="us" catagory="entertainment" />
            </Route>
            <Route exact path="/general">
              <News key="general" pagesize={this.pageSize} country="us" catagory="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pagesize={this.pageSize} country="us" catagory="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pagesize={this.pageSize} country="us" catagory="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pagesize={this.pageSize} country="us" catagory="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pagesize={this.pageSize} country="us" catagory="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

