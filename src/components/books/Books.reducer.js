import ACTIONS from '../../api-config/actions.constants';
const initialState = {
  bookList: {
    list: [],
    count: 0
  }
};
const books = (state = initialState, action) => {
  let tempState = Object.assign({}, state);
  switch (action.type) {
    case ACTIONS.BOOKS.GET_BOOK_LIST_SUCCESS:
      tempState.bookList = {
        list: [...action.response.data.results],
        count: action.response.data.num_results
      };
      return tempState;
    case ACTIONS.BOOKS.GET_BOOK_LIST_FAIL:
      return tempState;
    case ACTIONS.BOOKS.SET_BOOK_LIST:
      tempState.bookList = {
        list: [...action.data.results],
        count: action.data.num_results
      };
      return tempState;
    default:
      return state;
  }
};
export default books;
