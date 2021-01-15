import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(
      response.data.results[0].geometry.location || response.error_message
    );
  }, []);
  return map;
};

export default useGoogleAddress;
