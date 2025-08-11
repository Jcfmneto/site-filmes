import banner from '../../../assets/banner.png'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />

      <main className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 grow">
        <img
          src={banner}
          alt="Banner with 3D glasses and popcorn"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
        />

        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-xl">Sorry, we couldn&apos;t find that URL.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage
