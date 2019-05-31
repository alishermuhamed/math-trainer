import * as React from 'react';
import Link from '../components/link';

const Main: React.FC = (): JSX.Element => (
  <React.Fragment>
    <Link to="/game">START</Link>
    <Link to="/settings">SETTINGS</Link>
    <Link to="/stats">STATS</Link>
  </React.Fragment>
);

export default Main;
