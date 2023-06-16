import { FC, ChangeEvent } from "react";
import { motion } from "framer-motion";

type SearchBarProps = {
  onSearchQueryChange: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearchQueryChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(event.target.value);
  };

  return (
    <div className="pt-8">
      <motion.input
        whileFocus={{ scale: 1.02 }}
        className="w-full px-6 py-3 text-2xl bg-[#161d2f] rounded-lg placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
    </div>
  );
};

export default SearchBar;
