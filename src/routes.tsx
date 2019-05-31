import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Game from './pages/game';
import Settings from './pages/settings';
import Stats from './pages/stats';

const Routes: React.FC = (): JSX.Element => (
  <Switch>
    <Route exact={true} path="/" component={Main} />
    <Route path="/game" component={Game} />
    <Route path="/settings" component={Settings} />
    <Route path="/stats" component={Stats} />
  </Switch>
);

export default Routes;
