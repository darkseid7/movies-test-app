import { FC } from "react";

interface MovieListProps {
  children: React.ReactNode;
}

const MovieList: FC<MovieListProps> = ({ children }) => {
  return (
    <ul className="py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-auto-rows-auto">
      {children}
    </ul>
  );
};

export default MovieList;
