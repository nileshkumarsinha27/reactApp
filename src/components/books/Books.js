import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../api-config/actions.constants';
import List from '../list/List';

class Books extends Component {
  componentDidMount() {
    if (!localStorage.getItem('bookList')) {
      this.props.getBookList();
    } else this.props.setBookList();
  }
  render(props, state) {
    return (
      <div>
        <List
          resultList={this.props.books.bookList.list}
          count={this.props.books.bookList.count}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  getBookList: () => {
    dispatch({ type: ACTIONS.BOOKS.GET_BOOK_LIST });
  },
  setBookList: () => {
    dispatch({
      type: ACTIONS.BOOKS.SET_BOOK_LIST,
      data: JSON.parse(localStorage.getItem('bookList'))
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
