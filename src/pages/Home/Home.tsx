import { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import MovieCard from "../../components/MovieCard/MovieCard";
import Layout from "../../templates/Layout/Layout";

import useMovieSearch from "../../hooks/useFetch";

export const Home = () => {
  const { movies, searchMovies, loading } = useMovieSearch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    searchMovies(query);
    console.log(movies);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <h1 className=" text-center text-4xl">Movie Search App</h1>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <MovieList>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <p className="text-4xl col-span-4">
            No movies found for "{searchQuery}".
          </p>
        )}
      </MovieList>
    </Layout>
  );
};

export default Home;
