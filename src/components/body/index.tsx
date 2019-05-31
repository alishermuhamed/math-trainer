import * as React from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import { Main, Game, Settings, Stats } from '../../pages';

const Body: React.FC = (): JSX.Element => (
  <div className="body">
    <Switch>
      <Route exact={true} path="/" component={Main} />
      <Route path="/game" component={Game} />
      <Route path="/settings" component={Settings} />
      <Route path="/stats" component={Stats} />
    </Switch>
  </div>
);

export default Body;
