import Carousel from './Carousel'
import MovieCard from './MovieCard';



const Main = () => {


  return (
<main className="bg-gray-900 overflow-x-hidden w-full pt-24">

  <section aria-label="Featured Movies">
    <h2 className="sr-only">Featured Movies</h2>
    <Carousel />
  </section>

  <div className="pt-20 sm:pt-16 pb-12 text-center font-bold text-gray-400 px-4">
    <h2>Most Popular Movies</h2>
  </div>

  <section
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-4 px-3"
    aria-label="Popular Movies List"
  >
    <MovieCard />
  </section>

</main>


  );
};

export default Main;
