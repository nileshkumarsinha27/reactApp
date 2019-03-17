import React from 'react';
import BookDetails from '../bookDetails/BookDetails';
import ArticleDetails from '../articleDetails/ArticleDetails';
import './style.css';
const List = props => {
  const getListElems = (elem, index) => (
    <li key={index}>
      {props.fromArticles ? (
        <ArticleDetails data={elem} index={index} />
      ) : (
        <BookDetails data={elem} index={index} />
      )}
    </li>
  );
  return (
    <div className="listcontainer">
      <ul>
        {props.resultList.map((elem, index) => getListElems(elem, index))}
      </ul>
    </div>
  );
};
export default List;
