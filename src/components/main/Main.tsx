import MovieCard from './MovieCard';



const Main = () => {


  return (
    <main className="bg-gray-900 overflow-x-hidden w-full">
      <div className="pt-16 text-center font-bold text-gray-400 px-4">
        <h1>Most Popular Movies</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-4">
        <MovieCard />
      </div>
    </main>
  );
};

export default Main;
