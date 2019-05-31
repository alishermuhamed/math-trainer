import * as React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => (
  <React.Fragment>
    <Link to="/game" className="link large-text">
      START GAME
    </Link>
    <Link to="/settings" className="link large-text">
      SETTINGS
    </Link>
  </React.Fragment>
);

export default MainPage;
