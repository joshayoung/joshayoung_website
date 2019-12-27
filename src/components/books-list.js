import React from "react";
import Book from "../components/book";
import BooksRecommended from "../hooks/books-recommended";

export default () => {
  const books = BooksRecommended();

  return (
    <ul>
      {books.map(book => (
        <Book key={book.id} title={book.title} post={book.data} />
      ))}
    </ul>
  );
};
