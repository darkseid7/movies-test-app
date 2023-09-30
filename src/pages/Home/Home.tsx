import { useState } from "react";
import { motion } from "framer-motion";

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
  };

  if (loading) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex h-screen items-center justify-center"
      >
        <h1 className="text-4xl">Loading...</h1>
      </motion.div>
    );
  }
  return (
    <Layout>
      <h1 className=" text-center text-4xl">Movie Search App</h1>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <MovieList>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <p className="col-span-4 text-4xl">
            No movies found for "{searchQuery}".
          </p>
        )}
      </MovieList>
    </Layout>
  );
};

export default Home;
