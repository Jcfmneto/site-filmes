import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FavoriteList from './FavoriteList'

const Favorites = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <div className="bg-gray-900 h-screen flex justify-center items-center">
        <FavoriteList />
      </div>
      <Footer />
    </div>
  )
}

export default Favorites
