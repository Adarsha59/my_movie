// In Tplay.jsx
import React from "react";
import "./movieplayer.css";
import { useParams } from "react-router-dom";

const Tplay = ({ details}) => {
  const { id } = useParams();
  

  return (
    <>
    <h1>hello</h1>
      
      <button>Complete Watching</button>
    </>
  );
};

export default Tplay;
