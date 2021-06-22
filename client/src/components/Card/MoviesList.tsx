import React from 'react';
import { Link } from 'react-router-dom';
// css
import './style.css';

export interface Props {
  imdbID: number,
  Title: string,
  Year: Date,
  Type: string,
  Poster: string,
}

const MoviesList = ({ list }:any) => {
  return list.map((movie: { imdbID: React.Key | null | undefined; Poster: string | undefined; Title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Year: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Type: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => 
  <div className="group-cards">
    <div key={movie.imdbID} className="card-item">
      <img 
        src={movie.Poster}
        className="img-responsive"
      />
      <div className="card-info">
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <h3>{movie.Type}</h3>
      </div>
    </div>
  </div>
  );
};

export default MoviesList;