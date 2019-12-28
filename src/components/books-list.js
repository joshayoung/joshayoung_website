import React from "react";
import Book from "../components/book";
import BookData from "../hooks/book-data";

export default () => {
  const books = BookData();

  return (
    <ul>
      {books.map(book => (
        <Book key={book.id} title={book.title} post={book.data} />
      ))}
    </ul>
  );
};
