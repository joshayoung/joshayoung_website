import React, { Component } from "react";

class BookRecommended extends Component {
  constructor() {
    super();
  }

  author(data) {
    if (data.truncated_authors) {
      return " by " + data.truncated_authors;
    } else if (data.author !== "") {
      return " by " + data.author;
    }
  }

  bookTitle(book) {
    if (book.short_title) {
      return (
        <>
          {book.short_title}
          {this.author(book)}
        </>
      );
    } else {
      return (
        <>
          {book.title}
          {this.author(book)}
        </>
      );
    }
  }

  theBook(book, i) {
    if (book.display && book.recommend === true) {
      return <li key={i}>{this.bookTitle(book)}</li>;
    }
  }

  message() {
    if (this.props.hide !== true) {
      return (
        <>
          <h5>{this.props.title}</h5>
          <ul>{this.props.post.map((book, i) => this.theBook(book, i))}</ul>
        </>
      );
    }
  }

  render() {
    return <>{this.message()}</>;
  }
}

export default BookRecommended;
