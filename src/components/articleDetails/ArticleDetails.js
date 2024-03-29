import React, { Component } from 'react';
import './style.css';
class ArticleDetails extends Component {
  state = {
    showMore: false
  };

  changeState = () =>
    this.setState(prevState => ({ showMore: !prevState.showMore }));

  generateArticleDOM = () => {
    const { title, url, byline, abstract, section } = this.props.data;
    return (
      <div>
        <h2>{title}</h2>
        <p>{byline}</p>
        {!this.state.showMore && (
          <button onClick={this.changeState} className="details-button">
            Show More
          </button>
        )}
        {this.state.showMore && (
          <div>
            <p>Description: {abstract}</p>
            <p>
              Url:
              <a href={url} target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </p>
            <p>Section: {section}</p>
            <button onClick={this.changeState}>Show Less</button>
          </div>
        )}
      </div>
    );
  };
  render(props, state) {
    return <div className="articledetails">{this.generateArticleDOM()}</div>;
  }
}
export default ArticleDetails;
