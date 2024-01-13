// Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../components/Api';
import MoviesDetail from './MoviesDetail';
import Recommendation from './Reco';
import Movieplay from './Tplay';

const Details = () => {
  const { media_type, id } = useParams();
  const [detailsData, setDetailsData] = useState(null);
  const [showMovieplay, setShowMovieplay] = useState(false);

  useEffect(() => {
    const fetchDetailsData = async () => {
      try {
        const response = await fetchDataFromApi(`/${media_type}/${id}`);
        setDetailsData(response);
      } catch (error) {
        console.error('Error fetching details data:', error);
      }
    };

    fetchDetailsData();
  }, [media_type, id]);

  
  

  if (!detailsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {showMovieplay ? (
        <Movieplay details={detailsData}  />
      ) : (
        <div className="here">
          <MoviesDetail details={detailsData} media_type ={media_type}  />
          <hr />
          <div className="hey">
            {/* Other components */}
            <Recommendation mediaType={media_type} mediaId={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
