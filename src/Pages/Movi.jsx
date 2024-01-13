import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = ({ movieName }) => {
  const [queuePosition, setQueuePosition] = useState(null);
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        // Assuming there is an endpoint for adding a task and checking the status
        const addTaskResponse = await axios.post('YOUR_API_BASE_URL/addTask', {
          url: movieName,
          max: 3,
        });

        const { queue, hash } = addTaskResponse.data;

        setQueuePosition(queue);

        while (status === 'pending' || status === 'processing') {
          await new Promise((resolve) => setTimeout(resolve, 15000));

          const getTaskResponse = await axios.get(`YOUR_API_BASE_URL/getTask/${hash}`);
          const { status: taskStatus, results, scrapped } = getTaskResponse.data;

          setStatus(taskStatus);

          if (taskStatus === 'completed') {
            setLinks(results);
          } else if (taskStatus === 'processing') {
            console.log(`Status : Processing || Links Scrapped : ${scrapped}`);
          } else if (taskStatus === 'failed') {
            console.log('Task failed...');
          }
        }
      } catch (error) {
        console.error('Error fetching movie links:', error);
      }
    };

    fetchLinks();
  }, [movieName, status]);

  return (
    <div>
      <h2>Movie Search for {movieName}</h2>
      {status === 'completed' ? (
        <div>
          <p>Task completed...</p>
          <ul>
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{`Status: ${status} || Queue Position: ${queuePosition || 'N/A'}`}</p>
      )}
    </div>
  );
};

export default MovieSearch;
