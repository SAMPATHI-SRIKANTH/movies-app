import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const { id } = useParams();
  const [content, setContent] = useState();

  const fetchMovieDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="single-movie">
      <div className="single-movie-details">
        <div className="content">
          <div className="content-header">
            {/* <img
              src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
              alt=""
              width={150}
            /> */}
            <div>
              <h1>{content.title || content.name || content.original_title}</h1>
              <h1>rating ${Math.round(content.vote_average)}</h1>
              <div>
                <span>Genres: </span>
                {content.genres.map((c) => (
                  <>
                    <span key={c.id}>{c.name}</span>
                    <span>{", "}</span>
                  </>
                ))}
              </div>
              <h1>Release date:{content.release_date}</h1>
            </div>
            <div>
              <h1>Overview</h1>
              <p>{content.overview}</p>
            </div>
          </div>
        </div>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${content.backdrop_path}`}
            alt={content.id}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
