import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MovieModalProps {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  poster_path: string;
  title: string;
  release_date: string;
  id: string;
  overview: string;
  popularity: number;
  original_language: string;
}

const MovieModal: FC<MovieModalProps> = ({
  selected,
  setSelected,
  poster_path,
  title,
  release_date,
  popularity,
  original_language,
  overview,
}) => {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layoutId={selected}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={() => setSelected("")}
        >
          <div className="relative w-full max-w-md p-6 bg-[#161d2f] rounded-lg shadow-lg">
            <button
              className="absolute top-[-14px] right-0 p-2 text-white hover:text-gray-700 text-4xl"
              onClick={() => setSelected("")}
            >
              &times;
            </button>
            <div className="mt-4">
              <img
                className="w-full h-auto mx-auto md:max-w-xs max-h-[300px] object-none"
                src={
                  "https://image.tmdb.org/t/p/w220_and_h330_face/" + poster_path
                }
                alt={poster_path}
              />
            </div>
            <div className="mb-4">
              <p className=" py-1 text-xl font-semibold mb-2">{title}</p>
              <p className=" py-1 text-white">
                <span className=" opacity-50">Release date: </span>
                {release_date}
              </p>
              <p className=" py-1 text-white">
                <span className=" opacity-50">Popularity: </span>
                {popularity}
              </p>
              <p className=" py-1 text-white">
                <span className=" opacity-50">Original Language: </span>
                {original_language}
              </p>
              <p className="text-xs py-1 text-white">
                <span className="text-base opacity-50">Overview: </span>{" "}
                {overview}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
