import React, {useEffect} from 'react'
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async()=>{
    try{
      const resp1 = await axios.get(productsUrl);
      const resp2 = await axios.get(randomUserUrl);
console.log(resp1);
console.log(resp2);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>GlobalInstance</div>
  )
}

export default GlobalInstance