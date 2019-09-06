import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  // const addToSavedList = movie => {
  //   setSavedList( [...savedList, movie] );
  // };

  return (
    <div>
      <SavedList list={savedList} />
      <Link exact="true" to='/'>All</Link>
      <Link exact="true" to='movies'></Link>
      <Route path='/' component={MovieList}></Route>
      <Route path='movies/:id' component={Movie.id}></Route>
    </div>
  );
};

export default App;
