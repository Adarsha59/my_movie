import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "./src/logooo.svg";

// import "../src/App.css"
const Navbar = () => {
  const navigate = useNavigate();
  const goMovie = () => {
    navigate(`/explore/movie`);
  };
  const goTv = () => {
    navigate(`/explore/tv`);
  };

  return (
    

    <header className="header" data-header>
    

        <a href="/" className="logo">
          <img src={logo} alt="movie hunt" /><h3 className="ho">Movie-Hunt</h3>
        </a>

      
      

     
         
           

          <ul className="navbar-list">
            <li>
              <a href="/" className="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a onClick={goMovie}  className="navbar-link">
                Movie
              </a>
            </li>

            <li>
              <a onClick={goTv}  className="navbar-link">
                Tv Show
              </a>
            </li>

          </ul>

          
    </header>
  );
};

export default Navbar;
