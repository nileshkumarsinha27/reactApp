import articles from '../components/articles/Articles.reducer';
import ACTIONS from '../api-config/actions.constants';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const articleData = {
  copyright:
    'Copyright (c) 2019 The New York Times Company. All Rights Reserved.',
  last_updated: '2019-03-04T03:17:04-05:00',
  num_results: 1,
  results: [{ section: 'World', subsection: 'Asia Pacific' }],
  section: 'home',
  status: 'OK'
};
const initialState = {
  articleList: {
    list: [],
    count: 0
  }
};

describe('articles reducer testing', () => {
  it('should return the initial state', () => {
    expect(articles(undefined, {})).toEqual(initialState);
  });
  it('should handle GET_ARTICLES_LIST_SUCCESS', () => {
    const action = {
      type: ACTIONS.ARTICLES.GET_ARTICLES_LIST_SUCCESS,
      response: {
        data: articleData
      }
    };
    expect(articles({}, action)).toEqual({
      articleList: { count: articleData.num_results, list: articleData.results }
    });
  });
  test('should handle SET_ARTICLES_LIST', () => {
    const action = {
      type: ACTIONS.ARTICLES.SET_ARTICLES_LIST,
      data: articleData
    };
    expect(articles({}, action)).toEqual({
      articleList: { count: articleData.num_results, list: articleData.results }
    });
  });
  test('should handle GET_ARTICLES_LIST_FAIL', () => {
    const action = {
      type: ACTIONS.ARTICLES.GET_ARTICLES_LIST_FAIL,
      response: {
        data: articleData
      }
    };
    expect(articles({}, action)).toEqual({});
  });
});
