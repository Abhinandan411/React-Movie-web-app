import React, { useState } from 'react';
import Movie from './Movie';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesDisplay({ heading, option1, option2, choice1, choice2 }) {
    const [visible, setVisible] = useState(true);

    // console.log(option1);
    

    var settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <section className='movieDisplay'>
                <div className='movies-title'>
                    <header className='movie-header'>{heading}</header>
                    <p>
                        <span onClick={() => setVisible(true)}>{choice1}</span>
                        <span onClick={() => setVisible(false)}>{choice2}</span>
                    </p>
                </div>

                <Slider {...settings}>
                    {
                        visible
                            ? option1.map((movie, idx) => (
                                <Movie key={idx} movie={movie} />
                            ))
                            : option2.map((movie, idx) => (
                                <Movie key={idx} movie={movie} />
                            ))
                    }
                </Slider>
            </section>
        </>
    )
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
              right: "10px",
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
              left: "10px",
              zIndex: "9999",
          }}
          onClick={onClick}
      />
  );
}

export default MoviesDisplay;
