import books from '../components/books/Books.reducer';
import ACTIONS from '../api-config/actions.constants';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
const bookData = {
  copyright:
    'Copyright (c) 2019 The New York Times Company.  All Rights Reserved.',
  last_modified: '2019-02-27T23:38:02-05:00',
  num_results: 1,
  results: [
    {
      amazon_product_url:
        'https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBS-20',
      asterisk: 0,
      bestsellers_date: '2019-02-23',
      book_details: [{ title: 'WHERE THE CRAWDADS SING' }],
      dagger: 0,
      display_name: 'Hardcover Fiction',
      isbns: [
        { isbn10: '0735219095', isbn13: '9780735219090' },
        { isbn10: '0735219117', isbn13: '9780735219113' }
      ],
      list_name: 'Hardcover Fiction',
      published_date: '2019-03-10',
      rank: 1,
      rank_last_week: 1,
      reviews: [
        {
          book_review_link: '',
          first_chapter_link: '',
          sunday_review_link: '',
          article_chapter_link: ''
        }
      ],
      weeks_on_list: 25
    }
  ],
  status: 'OK'
};

describe('books reducer testing', () => {
  it('should return the initial state', () => {
    const initialState = {
      bookList: {
        list: [],
        count: 0
      }
    };
    expect(books(undefined, {})).toEqual(initialState);
  });
  it('should handle GET_BOOK_LIST_SUCCESS', () => {
    const action = {
      type: ACTIONS.BOOKS.GET_BOOK_LIST_SUCCESS,
      response: {
        data: bookData
      }
    };
    expect(books({}, action)).toEqual({
      bookList: { count: bookData.num_results, list: bookData.results }
    });
  });
  test('should handle SET_BOOK_LIST', () => {
    const action = {
      type: ACTIONS.BOOKS.SET_BOOK_LIST,
      data: bookData
    };
    expect(books({}, action)).toEqual({
      bookList: { count: bookData.num_results, list: bookData.results }
    });
  });
  test('should handle GET_BOOK_LIST_FAIL', () => {
    const action = {
      type: ACTIONS.BOOKS.GET_BOOK_LIST_FAIL,
      response: {
        data: bookData
      }
    };
    expect(books({}, action)).toEqual({});
  });
});
