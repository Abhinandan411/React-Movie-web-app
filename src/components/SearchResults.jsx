import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { searchMovies } from '../redux-toolkit/slice';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img_base_url = "https://image.tmdb.org/t/p/original/";

function SearchResults() {
    const { searchTerm } = useParams();
    console.log(searchTerm);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchMovies(searchTerm));
    }, [dispatch, searchTerm]);

    const { searchMoviesData } = useSelector((state) => {
        return state.movieReducer;
    });

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    }

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 5, // This makes sure it scrolls 5 movies at a time
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <h2 style={{ padding: "2rem" }}>{`Search results for ${searchTerm}`}</h2>

            <Slider {...sliderSettings}>
                {searchMoviesData && searchMoviesData.map((movie, idx) => (
                    <Link to={`/singleItem/${movie.id}`}>
                        <div className='results' key={idx}>
                            <div className="movie-img">
                                <img src={img_base_url + movie.poster_path} alt={movie.title || movie.original} />
                            </div>
                            <div className="info">
                                <h3>{movie.title || movie.original || movie.name || movie.original_name}</h3>
                                <p>
                                    {movie.release_date ? formatDate(movie.release_date) : formatDate(movie.first_air_date)}
                                </p>
                            </div>
                        </div>

                    </Link>


                ))}
            </Slider>
        </>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "gray", // Visible color
                borderRadius: "50%",
                right: "30px",
                zIndex: "9999",
            }}
            onClick={onClick}
        />
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "gray", // Visible color
                borderRadius: "50%",
                left: "30px",
                zIndex: "9999",
            }}
            onClick={onClick}
        />
    );
}


export default SearchResults;
