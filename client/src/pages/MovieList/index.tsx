import React, { useState} from 'react';
import InputSearch from '../../components/Inputs';
import axios from 'axios';
import { apiUrl } from '../../utils/omdb';
import MoviesList from '../../components/Card/MoviesList';
import ErrorBoundary from '../../components/Errors/ErrorBoundaries';

// images
import logo from '../../assets/images/logo.png';
// css
import '../../assets/styles/global.css';
import './style.css';

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const searchEngine = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.get(`${apiUrl}&s=${movieTitle}`).then((result) => {
      setMoviesList(result.data.Search);
    });
  };
  return(
    <body>
      <header>
          <div className="container" id="page-movie-content">
            <div className="flex-row">
              <img 
                src={logo}
                alt="logo"
                className="img-logo"
              />
              <span className="logo">YourCine</span>
            </div>
            <h2>Encontre os melhores Filmes e Séries.</h2>
              <form onSubmit={searchEngine}>
                <InputSearch movieTitle={movieTitle} setMovieTitle={setMovieTitle} />
              </form>
          </div>
      </header>
      <section className="container columns-card">
        <ErrorBoundary>
          <MoviesList list={moviesList}/>
        </ErrorBoundary>
    </section>
  </body>
  );
}

export default Home;