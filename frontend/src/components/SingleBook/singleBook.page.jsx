import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleBookCard from '../SingleBooks';

const SingleBook = () => {
  const location = useLocation();
  const bookData = location.state?.book; 

  return (
    <div>
      <SingleBookCard data={bookData} />
    </div>
  );
};

export default SingleBook;
