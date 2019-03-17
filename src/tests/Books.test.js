import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import Books from '../components/books/Books';
import rootReducers from '../rootReducer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const store = createStore(rootReducers);
configure({ adapter: new Adapter() });
describe('Initial Test of Books Component', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <Books />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
