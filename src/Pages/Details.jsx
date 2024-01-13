import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../components/Api';
import MoviesDetail from './MoviesDetail';
import Recommendation from './Reco';
import Movieplay from './Movieplay';

const Details = () => {
  const { media_type, id } = useParams();
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    const fetchDetailsData = async () => {
      try {
        // Fetch details data using the media_type and id
        const response = await fetchDataFromApi(`/${media_type}/${id}`);
        setDetailsData(response);
      } catch (error) {
        console.error('Error fetching details data:', error);
      }
    };

    fetchDetailsData();
  }, [media_type, id]);

  if (!detailsData) {
    return <p>Loading...</p>; // or any loading state you prefer
  }

  // Pass detailsData as a prop to MoviesDetail
  return (
    <>
    <div className="here">

    <MoviesDetail details={detailsData} />
    <hr />
    <div className='hey' > 

    <Movieplay  details={detailsData} />
    <Recommendation   mediaType={media_type} mediaId ={id}   />
    </div>
    </div>
    </>
  );
};

export default Details;
