import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import List from '../components/list/List';
import rootReducers from '../rootReducer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const store = createStore(rootReducers);

describe('Initial Test of the List', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
