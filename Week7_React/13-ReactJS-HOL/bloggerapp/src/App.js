import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
  const [showCourse, setShowCourse] = useState(true);

  const toggleBlog = () => {
    if (showBlog) {
      setShowBlog(false);
    } else {
      setShowBlog(true);
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div className="grid">
        <div className="column">
          <button onClick={() => setShowBook(!showBook)}>Toggle Book</button>
          {showBook ? <BookDetails /> : <p>Book Details Hidden</p>}
        </div>
        <div className="column">
          <button onClick={toggleBlog}>Toggle Blog</button>
          {showBlog && <BlogDetails />}
        </div>
        <div className="column">
          <button onClick={() => setShowCourse(!showCourse)}>Toggle Course</button>
          {showCourse && <CourseDetails />}
        </div>
      </div>
    </div>
  );
}

export default App;
