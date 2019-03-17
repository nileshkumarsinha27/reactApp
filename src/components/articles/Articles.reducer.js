import ACTIONS from '../../api-config/actions.constants';
const initialState = {
  articleList: {
    list: [],
    count: 0
  }
};
const articles = (state = initialState, action) => {
  let tempState = Object.assign({}, state);
  switch (action.type) {
    case ACTIONS.ARTICLES.GET_ARTICLES_LIST_SUCCESS:
      tempState.articleList = {
        list: [...action.response.data.results],
        count: action.response.data.num_results
      };
      return tempState;
    case ACTIONS.ARTICLES.GET_ARTICLES_LIST_FAIL:
      return tempState;
    case ACTIONS.ARTICLES.SET_ARTICLES_LIST:
      tempState.articleList = {
        list: [...action.data.results],
        count: action.data.num_results
      };
      return tempState;
    default:
      return state;
  }
};
export default articles;
