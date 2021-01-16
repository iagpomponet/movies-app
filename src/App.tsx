import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { defaultTheme } from './theme';
import { getPopularMovies } from './api/index';
import GlobalStyles from './globalStyles';
import Header from '../src/components/header/index';
import MoviePage from '../src/pages/movie/index'
import Index from '../src/pages/index/index';

function App() {
  const [theme] = useState(defaultTheme);

  const getMovies = async () => {
    const latestMovies = await getPopularMovies();

    console.log('latestMovies :>> ', latestMovies);
  }

  useEffect(() => {
    getMovies();
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/movie/:id">
          <MoviePage />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
