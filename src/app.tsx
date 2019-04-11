import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import GamePage from './pages/game-page';

const App: React.FC = (): JSX.Element => (
  <Switch>
    <Route exact={true} path="/" component={MainPage} />
    <Route path="/game" component={GamePage} />
  </Switch>
);

export default App;
