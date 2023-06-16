import { useState, FC } from "react";
import { motion } from "framer-motion";

import MovieModal from "../MovieModal/MovieModal";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  id: string;
  overview: string;
  popularity: number;
  original_language: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    release_date,
    overview,
    popularity,
    original_language,
  } = movie;

  const [selected, setSelected] = useState<string | null>("");
  console.log(selected);

  return (
    <>
      <motion.li
        className="bg-[#161d2f] shadow-lg rounded-lg overflow-hidden cursor-pointer"
        key={id}
        onClick={() => setSelected(id)}
        layoutId={id}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="">
          <img
            className="w-full h-auto"
            src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + poster_path}
            alt={poster_path}
          />
          <div className="p-4">
            <p className="text-xl font-semibold mb-2">{title}</p>
            <p className="text-white">
              <span className=" opacity-50">Release date:</span> {release_date}
            </p>
          </div>
        </div>
      </motion.li>

      <MovieModal
        id={id}
        selected={selected}
        setSelected={setSelected}
        poster_path={poster_path}
        title={title}
        release_date={release_date}
        popularity={popularity}
        original_language={original_language}
        overview={overview}
      />
    </>
  );
};

export default MovieCard;
