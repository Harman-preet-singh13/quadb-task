import { useState, useEffect } from 'react';
import { searchShows } from '../api';

const useShowDetails = (id) => {
  const [shows, setShows] = useState([]);
  const [showById, setShowById] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchShows('all');
        setShows(data);

        const foundShow = data.find((show) => show.show.id === Number(id));

        if (foundShow) {
          setShowById(foundShow);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [id]);

  return { shows, showById };
};

export default useShowDetails;
