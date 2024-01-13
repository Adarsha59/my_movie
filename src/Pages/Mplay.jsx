// Mplay.jsx
import React from 'react';
import "./movieplayer.css"
import { useParams } from 'react-router-dom';

const Mplay = ({ details }) => {
    const { media_type,id } = useParams();
 

  return (
    <>
      
      <button>Complete Watching</button>
    </>
   
  );
};

export default Mplay;
