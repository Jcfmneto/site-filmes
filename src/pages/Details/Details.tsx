import React from 'react'
import Header from '../../components/header/Header'
import MovieInfo from './MovieInfo'
import Footer from '../../components/footer/Footer'

const Details = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden ">
      <Header />

      <div className=" grow">
        <MovieInfo />
      </div>

      <Footer />
    </div>
  )
}

export default Details
