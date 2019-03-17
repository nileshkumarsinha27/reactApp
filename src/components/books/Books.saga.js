import { call, put } from 'redux-saga/effects';
import { getData } from '../../utils/axios.js';

import API from '../../api-config/api.config';
import ACTIONS from '../../api-config/actions.constants';
import CONSTANTS from '../../constants.js';

function* getBooks(action) {
  let response;
  const url = `${API.bookApi}?api-key=${CONSTANTS.API_KEY}&list=${decodeURI(
    'hardcover-fiction'
  )}`;
  try {
    response = yield call(getData, url, action.data);
    if (response.status === 200) {
      localStorage.setItem('bookList', JSON.stringify(response.data));
      yield put({
        type: ACTIONS.BOOKS.GET_BOOK_LIST_SUCCESS,
        response
      });
    } else {
      yield put({
        type: ACTIONS.BOOKS.GET_BOOK_LIST_FAIL,
        response
      });
    }
  } catch (e) {
    yield put({
      type: ACTIONS.BOOKS.GET_BOOK_LIST_FAIL,
      data: e
    });
  }
}
export default getBooks;
