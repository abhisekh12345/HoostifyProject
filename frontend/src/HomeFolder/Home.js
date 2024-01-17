import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import ShortVideo from './ShortVideo'
import Multicarsouel from './Multicarsouel'
import CardList from './CardList'
import Testomonial from './Testomonial'
import Partnership from './Partnership'
import SmallForm from './SmallForm'

const Home = () => {
  return (
     <>
        <Navbar />
        <Banner />
        <ShortVideo />
        <Multicarsouel />
        <CardList />
        <Testomonial />
        <Partnership />
        <SmallForm />
     </>
  )
}

export default Home