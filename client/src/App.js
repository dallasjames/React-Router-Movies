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
      <Route exact path='/' component={MovieList}></Route>
      <Route path='movies/:id' component={Movie}></Route>
    </div>
  );
};

export default App;
