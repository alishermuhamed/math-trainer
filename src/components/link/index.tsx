import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './style.css';

interface Props {
  to: string;
  children: string;
  className?: string;
}

const Link: React.FC<Props> = (props: Props): JSX.Element => (
  <RouterLink to={props.to} className={'link ' + props.className}>
    {props.children}
  </RouterLink>
);

export default Link;
