import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Explore from './Pages/Explore'
import SearchResult from './Pages/Search'
import Movi from './Pages/Movi'
import MovieSearch from './Pages/Movi'
import NotFound from './Pages/Page'

function App() {
const movieName = "jawan"
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/:media_type/:id" element={<Details/>} />
        <Route path="/explore/:mediatype" element={<Explore />} />
      
        <Route path="/search/:query" element={<SearchResult/>} />
       
        <Route path="*" element={ <NotFound/>} />
      </Routes>
      {/* <MovieSearch movieName  ={movieName }/> */}
      <Footer/>
    </Router>
  </>
  )
}

export default App
   




