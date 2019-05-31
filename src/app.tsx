import * as React from 'react';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Game from './pages/game';
import Settings from './pages/settings';
import Stats from './pages/stats';

const App: React.FC = (): JSX.Element => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Main} />
      <Route path="/game" component={Game} />
      <Route path="/settings" component={Settings} />
      <Route path="/stats" component={Stats} />
    </Switch>
  </React.Fragment>
);

export default App;
