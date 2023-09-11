// src/App.js
import React, { useState } from 'react';
import './App.css'; // You can create this file for styling
import booksData from './data';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
       
      
      <h1>Book Library</h1>
      <BookList books={books} />
      <BookForm onAddBook={addBook} />
    </div>
  );
}


export default App;
