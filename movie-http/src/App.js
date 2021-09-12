import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    const { data } = await Axios.get('https://swapi.dev/api/films');
    setMovies((prev) => {
      const newMovies = data.results.map((movie) => {
        return {
          id: movie['episode_id'],
          title: movie.title,
          release: movie['release_date'],
          openingText: movie['opening_crawl'],
        };
      });
      return [...newMovies];
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section>
        <AddMovie></AddMovie>
      </section>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
