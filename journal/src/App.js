import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Home from './modules/Home';
import Login from './modules/Login';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import { Greetings } from 'aws-amplify-react';

const GreetingsTheme = {
  navButton: {
      border: '0',
      background: 'white',
      color: 'blue',
      borderBottom: '1px solid',
      fontSize: '0.8em'
  }
}

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = { 
      authData: null,
      authState: null
    }
  }

  handleStateChange(authState, authData) {
    this.setState({
      authState,
      authData
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Menu>
            <Switch>
              <Route exact path="/">
                <Menu.Menu>
                  <Menu.Item active><Link to="/">Home</Link></Menu.Item>
                  <Menu.Item><Link to="/Login">Login</Link></Menu.Item>
                </Menu.Menu>
              </Route>
              <Route exact path="/login">
                <Menu.Menu>
                  <Menu.Item><Link to="/">Home</Link></Menu.Item>
                  <Menu.Item active><Link to="/login">Login</Link></Menu.Item>
                </Menu.Menu>
              </Route>
            </Switch>
            <Menu.Menu position="right">
              <Menu.Item>
                <Greetings
                  theme={GreetingsTheme}
                  outGreeting="Welcome"
                  inGreeting={(username) => `Hi ${username}`}
                  onStateChange={this.handleStateChange}
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Switch>
            <Route exact path="/" name="home" render={(props) => (
              <Home {...props} 
                authState={this.state.authState} 
                authData={this.state.authData} 
              />
            )} />
            <Route exact path="/login" name="login" component={Login} />
          </Switch>
        </div>
        </HashRouter>
    );
  }
}

export default App;
