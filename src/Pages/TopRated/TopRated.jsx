import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";

const TopRated = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTopRated = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTopRated();
  }, [page]);

  const activeHandler = (clickedActive) => {
    setPage(parseInt(clickedActive));
  };

  return (
    <div className="top-rated-container">
      <h1 className="page-title">Top Rated Movies</h1>
      <ul className="movies-list">
        {content &&
          content.map((c) => (
            <Movie
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              vote_average={c.vote_average}
            />
          ))}
      </ul>

      <Pagination activePage={page} onPageChange={activeHandler} />
    </div>
  );
};

export default TopRated;
