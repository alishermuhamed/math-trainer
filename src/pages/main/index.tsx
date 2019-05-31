import * as React from 'react';
import { Link } from '../../components';
import './style.css';

const Main: React.FC = (): JSX.Element => (
  <div className="main">
    <Link to="/game">START</Link>
    <Link to="/settings">SETTINGS</Link>
    <Link to="/stats">STATS</Link>
  </div>
);

export default Main;
