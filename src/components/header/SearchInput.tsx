import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { useState, useRef } from "react";
import { tmdbApiSearch } from "../../services/api";
import type { Movie } from "../../types/Movie";
import type { IApiResponse } from "../../types/IApiResponse";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [results, setResults] = useState<Movie[]>([]);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const handleInput = (): void => {
    const query = inputRef.current?.value;

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(async () => {
      if (query && query.trim() !== "") {
        try {
          const response = await tmdbApiSearch.get<IApiResponse<Movie>>("/search/movie", {
            params: { query, language: "pt-BR" },
          });
          console.log(response)
          setResults(response.data.results);
          setOpenSearch(true);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
          setOpenSearch(false);
        }
      } else {
        setResults([]);
        setOpenSearch(false);
      }
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
      <div className="relative max-w-4xl mx-auto">
        <form
          className="flex items-center justify-between border border-white rounded overflow-hidden"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Search movies"
            onChange={handleInput}
            className="flex-1  min-w-0  max-w-4xl bg-transparent text-white border-none focus:outline-none
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
            px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6
            py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3"
          />
          <button
            type="submit"
            className=" pr-2  flex-shrink-0 flex justify-center items-center"
          >
            <SearchIcon className="h-3 w-3 text-white sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 hover:cursor-pointer" />
          </button>
        </form>

        <ul
          className={`absolute left-0 right-0 z-10 mt-1 max-h-80 overflow-auto rounded bg-black transition-all ease-in duration-300 ${
            openSearch
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px] pointer-events-none"
          }`}
        >
          {results.slice(0, 5).map((movie) => (
            <li
              key={movie.id}
              className="py-2 text-gray-400 hover:bg-gray-800 hover:cursor-pointer transition-all duration-500 border-b border-gray-700"
            >
              <strong className="text-gray-200 p-2">{movie.title}</strong>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default SearchInput;
