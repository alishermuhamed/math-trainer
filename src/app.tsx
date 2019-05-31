import * as React from 'react';
import Routes from './routes';

const App: React.FC = (): JSX.Element => (
  <React.Fragment>
    <div className="header">MATH TRAINING</div>
    <div className="body">
      <Routes />
    </div>
  </React.Fragment>
);

export default App;
