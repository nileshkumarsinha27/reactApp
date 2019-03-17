import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookDetails from '../components/bookDetails/BookDetails';
import rootReducers from '../rootReducer';
const store = createStore(rootReducers);
configure({ adapter: new Adapter() });

describe('Initial Test of BookDetails component', () => {
  test('it renders snapshot correctly', () => {
    const context = shallow(
      <Provider store={store}>
        <BookDetails />
      </Provider>
    );
    expect(context).toMatchSnapshot();
  });
});
