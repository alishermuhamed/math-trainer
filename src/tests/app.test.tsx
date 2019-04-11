import * as React from 'react';
import App from '../app';
import * as renderer from 'react-test-renderer';

test('App component renders normally', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
