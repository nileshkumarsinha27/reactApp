import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../api-config/actions.constants';
import List from '../list/List';

class Articles extends Component {
  componentDidMount() {
    if (!localStorage.getItem('articleList')) {
      this.props.getArticleList();
    } else this.props.setArticleList();
  }
  render(props, state) {
    return (
      <div>
        <List
          resultList={this.props.articles.articleList.list}
          count={this.props.articles.articleList.count}
          fromArticles
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  getArticleList: () => {
    dispatch({ type: ACTIONS.ARTICLES.GET_ARTICLES_LIST });
  },
  setArticleList: () => {
    dispatch({
      type: ACTIONS.ARTICLES.SET_ARTICLES_LIST,
      data: JSON.parse(localStorage.getItem('articleList'))
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
