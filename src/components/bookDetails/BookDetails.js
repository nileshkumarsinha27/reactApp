import React, { Component } from 'react';
import './style.css';
class BookDetails extends Component {
  state = {
    showMore: false
  };

  changeState = () =>
    this.setState(prevState => ({ showMore: !prevState.showMore }));

  generateBookDOM = (data, index) => (
    <div key={index}>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Price: {data.price}</p>
      {!this.state.showMore && (
        <span onClick={this.changeState}>Show More</span>
      )}
      {this.state.showMore && (
        <div>
          <p>Description: {data.description}</p>
          <p>
            Url:
            <a
              href={this.props.data.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </p>
          <p>Published: {this.props.data.published_date}</p>
          <span onClick={this.changeState}>Show Less</span>
        </div>
      )}
    </div>
  );
  getBookDetails = data => (
    <div>{data.map((elem, index) => this.generateBookDOM(elem, index))}</div>
  );
  render(props, state) {
    return (
      <div className="bookdetails">
        {this.getBookDetails(this.props.data.book_details)}
      </div>
    );
  }
}
export default BookDetails;
