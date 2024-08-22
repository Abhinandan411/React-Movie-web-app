import React from 'react';
import { Link } from 'react-router-dom';

const img_base_url = "https://image.tmdb.org/t/p/original/";

function formateDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options)
}

function Movie({ movie }) {

    // console.log(movie);
    
    return (
        <Link to={`/singleItem/${movie.id}`}>
            <div className='movie'>
                <div className="movie-img">
                    <img src={img_base_url + movie.poster_path} alt={movie.title || movie.original} />
                </div>
                <div className="info">
                    <h3>{movie.title || movie.original || movie.name || movie.original_name}</h3>
                    <p>
                        {movie.release_date ? formateDate(movie.release_date) : formateDate(movie.first_air_date)}
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default Movie;
