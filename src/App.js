

import "./App.css"
import { getMovieList, searchMovie} from "./api"
import { useState, useEffect } from 'react'
// import {useEffect, useState} from "react"
// import axios from 'axios';

const App = () => {
  const [popularMovies, setPopularMovies] = useState ([])

    useEffect(() => {
      getMovieList().then((result) => {
        setPopularMovies(result)
      })
    }, 
  [])




const PopularMovieList = () => {
  return popularMovies.map((movie, i) => {
    return (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title"> {movie.title}</div>
        <img className="Movie-image" alt="poster film" 
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
        <div className="Movie-date"> release:{movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_average}</div>
      </div>

    )
  })
}

const search = async (q) => {
  if (q.length > 3) {
    
    const query = await searchMovie(q)
    setPopularMovies(query.results)
  }
}


return (
  <div className="App">
    <div className="Navbar">
      <button className="glowing-btn"><span className="glowing-txt">G<span className="faulty-letter">u</span>spri</span></button>
    </div>
    <header className="App-header">
      <input placeholder="
      cari pacar kesayangan"
      className="Movie-search"
      onChange={({target}) => search (target.value)}
      />
      <div className="Movie-container">
        <PopularMovieList />
        </div> 
    </header>
     </div>
)
}
export default App


























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import MoviePopular from './moviepopular';

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
//     const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

//     axios.get(URL)
//       .then(response => {
//         setMovies(response.data.results);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className='App-header'>

//       <hi>Popular Movies</hi>
//       <div className="Movie-container">
//         <div className='Movie-wrapper'>
//           <div className='Movie-title'>
            
//              {movies.map(movie => (
//                 <MoviePopular key={movie.id} movie={movie} />
//                  ))}
//           </div>
//         </div>


//       </div>
//        </header>
//     </div>
//   );
// }

// export default App;
