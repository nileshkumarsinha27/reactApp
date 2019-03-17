import { combineReducers } from 'redux';
import books from './components/books/Books.reducer';
import articles from './components/articles/Articles.reducer';

const rootReducer = combineReducers({ books, articles });
export default rootReducer;
