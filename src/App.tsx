import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import PopularMovies from './pages/PopularMovies';
import SearchResults from './pages/SearchResults';
import UpcomingMovies from './pages/UpcomingMovies';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="main-container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/upcoming" />
            </Route>
            <Route path="/upcoming">
              <UpcomingMovies />
            </Route>
            <Route path="/popular">
              <PopularMovies />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
