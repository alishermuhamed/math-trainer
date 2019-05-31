import * as React from 'react';
import Link from '../link';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps): JSX.Element => {
  if (props.location.pathname === '/') return <div>MATH TRAINER</div>;
  else return <Link to="/">BACK</Link>;
};

export default withRouter(Header);
