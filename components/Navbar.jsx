import React from "react";
import { useNavigate } from "react-router-dom";
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
          <img src="./src/logooo.svg" alt="Filmlane logo" /><h1  className="ho">Movie-Hunt</h1>
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
