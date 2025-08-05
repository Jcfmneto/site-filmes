import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <div className="flex-grow">
        <Main />
      </div>

      <Footer />
    </div>
  )
}

export default Home
