import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon"

const SearchInput = () => {
  return (
    <form className="flex items-center justify-between border border-white rounded overflow-hidden">
      <input
        type="text"
        placeholder="Search movies"
        className="flex-1  min-w-0  max-w-4xl bg-transparent text-white border-none focus:outline-none
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
          px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6
          py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3"
      />
      <button type="submit" className=" pr-2  flex-shrink-0 flex justify-center items-center">
        <SearchIcon className="h-3 w-3 text-white sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 hover:cursor-pointer" />
      </button>
    </form>
  )
}

export default SearchInput
