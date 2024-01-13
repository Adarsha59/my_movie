import React from 'react'
import Upcoming from './MovieCard'
import Toprated from './Toprated'
import Series from './Nepali'
import Herobanner from '../../components/Herobanner'
import Details from './Details'
import Trending from './Trending'
import Hindi from './Hindi'
import Dubbed from './Nepali'
import Best from './Best'

const Home = () => {
    
  return (
   <>
   
   <Herobanner/>
   <Trending/>
   <Hindi/>
   <Toprated/>
   <Dubbed/>
   <Best/>
   </>
  )
}

export default Home
