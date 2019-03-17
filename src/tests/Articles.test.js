import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import Articles from '../components/articles/Articles';
import rootReducers from '../rootReducer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const store = createStore(rootReducers);
configure({ adapter: new Adapter() });
describe('Initial Test of Articles Component', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <Articles />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
