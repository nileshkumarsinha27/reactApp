import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../components/header/Header';
import rootReducers from '../rootReducer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const store = createStore(rootReducers);

describe('Initial Test of the Header', () => {
  test('Header renders correctly', () => {
    const context = shallow(<Header />);
    expect(context.find('h1').text()).toBe('My Collection');
  });
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
