import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Link } from '../';
import './style.css';

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps): JSX.Element => (
  <div className="header">
    {props.location.pathname === '/' ? (
      'MATH TRAINER'
    ) : (
      <Link to="/" className="back-link">
        BACK
      </Link>
    )}
  </div>
);

export default withRouter(Header);
