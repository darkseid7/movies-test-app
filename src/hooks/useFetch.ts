import { useState, useEffect } from "react";

type Movie = {
  poster_path: string;
  title: string;
  release_date: string;
  id: string;
  overview: string;
  popularity: number;
  original_language: string;
};

type SearchResponse = {
  results: Movie[];
};

const useMovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDg4OGE2NjJlZmFjOTlmZjlkNDUyYjIxYTA1YmM5OSIsInN1YiI6IjY0OGJiZDhmYzJmZjNkMDBjNTk4YzNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FhsDN0hRVDXPkOoTgqLQ8RrGPzM4qAmbYswvTmmmZ38";

  const fetchMovies = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const data: SearchResponse = await response.json();
      setMovies(data.results);
      console.log(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    const initialUrl =
      "https://api.themoviedb.org/3/movie/popular?language=en-US";
    fetchMovies(initialUrl);
  }, []);

  const searchMovies = async (query: string) => {
    if (query.trim() === "") {
      // Si la consulta está vacía, regresamos a las películas populares
      const popularUrl =
        "https://api.themoviedb.org/3/movie/popular?language=en-US";
      fetchMovies(popularUrl);
    } else {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}`;
      fetchMovies(searchUrl);
    }
  };

  return { movies, searchMovies, loading };
};

export default useMovieSearch;
