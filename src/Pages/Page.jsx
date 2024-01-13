// NotFound.jsx
import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! It seems like you're lost in the funny land.</p>
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="Lost Cat GIF"
      />
    </div>
  );
};

export default NotFound;
