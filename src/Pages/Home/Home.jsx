import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "../../components/Movie/Movie";
import Pagination from "../../components/Pagination/Pagination";

import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );
    // `https://api.themoviedb.org/3/trending?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    setContent(data.results);
    console.log(data);
    console.log(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchPopular();
  }, [page]);

  const activeHandler = (clickedActive) => {
    setPage(parseInt(clickedActive));
  };

  return (
    <div className="home-container">
      <h1 className="page-title">Popular Movies</h1>
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

export default Home;
