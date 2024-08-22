import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const img_base_url = "https://image.tmdb.org/t/p/original/";

function Search() {

  const {topRatedMovies} = useSelector((state)=>{
    return state.movieReducer;
  })

  console.log(topRatedMovies);
  

  const [searctTerm, setSearchTerm] = useState("");
  const [background , setBackground] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + searctTerm)
  }


  return (
    <section className='search'>
      <div className="search-component">
        <h1>Welcome</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Search for a movie or TV show...'
            value={searctTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
    </section>

  )
}

export default Search;

















// https://movix-app-murex.vercel.app/assets/no-poster-4xa9LmsT.png