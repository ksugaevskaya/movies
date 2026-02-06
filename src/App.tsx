import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

type MovieProps = {
  id: number;
  image: {
    medium: string;
  } | null;
  name: string;
  premiered: string;
  rating: {
    average: number | null;
  };
};

function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.includes(inputValue),
  );

  const handlePagination = () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);

      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <Header onChange={handleChange} value={inputValue}></Header>
      <div className="card__container">
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            img={movie?.image?.medium}
            title={movie.name}
            date={movie.premiered}
            rating={movie.rating.average}
          />
        ))}
      </div>
      <button onClick={handlePagination} className="pagination-button">
        NEXT
      </button>
      <Footer />
    </>
  );
}

export default App;
