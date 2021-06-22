import React, { InputHTMLAttributes } from 'react';
import './style.css';
import { IoIosSearch } from 'react-icons/io';

const InputSearch = ({ movieTitle, setMovieTitle } : { movieTitle:any, setMovieTitle:any }) => {
    return (
      <div className="input-group">
        <input
          className="input-search"
          type="text"
          onChange={(e) => setMovieTitle(e.target.value)}
          value={movieTitle}
          placeholder="Faça sua busca com nome do Filme ou Série"
        />
        <IoIosSearch
         className="icon-position"
         />  
      </div>
    );
}

export default InputSearch;
