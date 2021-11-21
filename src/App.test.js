import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders app link', () => {
  const test = shallow(<App />);
  expect(test).toMatchSnapshot();
});
