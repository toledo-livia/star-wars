import * as React from 'react'
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';
import {LoginPage, RegisterPage} from './Pages';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            {/* <Route exact path="/home" component={HomePage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
