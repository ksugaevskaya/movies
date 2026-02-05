import { useEffect, useState } from "react";
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
      <Header></Header>
      <div className="card__container">
        {movies.map((movie) => (
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
