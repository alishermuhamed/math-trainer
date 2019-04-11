import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import GamePage from './pages/game-page';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route path="/game" component={GamePage} />
      </Switch>
    );
  }
}

export default App;
