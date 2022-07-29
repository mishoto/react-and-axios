import React, { useEffect } from 'react';
import axios from 'axios';

const url = 'http://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try{
      const response = await axios(url);

      console.log(response);
    } catch (error){
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>First Request</h2>;
};

export default FirstRequest;
