import React from "react";
import Book from "../items/book";
import BookData from "../hooks/book-data";

export default () => {
  const books = BookData();

  return (
    <>
      {books.map(book => (
        <Book key={book.id} title={book.title} post={book.data} />
      ))}
    </>
  );
};
