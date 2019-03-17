import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleDetails from '../components/articleDetails/ArticleDetails';
import rootReducers from '../rootReducer';
configure({ adapter: new Adapter() });
const store = createStore(rootReducers);

describe('Initial Test of ArticleDetails component', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <ArticleDetails />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
