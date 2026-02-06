import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

type MovieProps = {
  id: number;
  image: {
    medium: string;
  };
  name: string;
  premiered: string;
  rating: {
    average: number | null;
  };
};

function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.includes(inputValue),
  );

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://api.tvmaze.com/shows?page=1");

      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header onChange={handleChange} value={inputValue}></Header>
      <div className="card__container">
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            img={movie.image.medium}
            title={movie.name}
            date={movie.premiered}
            rating={movie.rating.average}
          />
        ))}{" "}
      </div>
      <Footer />
    </>
  );
}

export default App;
