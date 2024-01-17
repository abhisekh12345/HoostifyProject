import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import ShortVideo from './ShortVideo'
import Multicarsouel from './Multicarsouel'
import CardList from './CardList'

const Home = () => {
  return (
     <>
        <Navbar />
        <Banner />
        <ShortVideo />
        <Multicarsouel />
        <CardList />
     </>
  )
}

export default Home