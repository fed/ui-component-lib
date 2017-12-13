import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Alert from './Alert';

configure({
  adapter: new Adapter()
});

describe('Alert', () => {
  it('renders without crashing', () => {
    mount(<Alert onSubmit={() => {}} />);
  });
});
