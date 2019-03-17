import React from 'react';
import Layout from '../components/layout/Layout';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial Test of the Header', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(<Layout />);
    expect(context).toMatchSnapshot();
  });
});
