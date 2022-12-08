import './Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// 5cKcHwMzZsJ4QW6HbQW2YyHW6w0naYVa

const api_key = "5cKcHwMzZsJ4QW6HbQW2YyHW6w0naYVa";

//https://wallhaven.cc/api/v1/w/<ID>?apikey={api_key}

const URL = `https://wallhaven.cc/api/v1/w/{props.id}?apikey={api_key}`;
 
function Main(){

    const [backgroundimage, setBackgroundimage] = useState(''); 

    const fetchBackground = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.asc&api_key=9df4bf0a842e8e95611241998929c20b`);
      if(!response.data.results) {return}
      if (response.data.results.length > 0) {
        // const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${response.data.results[0].backdrop_path}`;
        // setBackgroundimage(backgroundImageUrl);
       
       
      }
       
    } catch (e) {
     
      console.log(e);
    }

  
    
  };

    useEffect(() => {
    fetchBackground();
  }, []);


    return (
    <main>
      <div className='main'>Hello</div>
    </main>
  );

}

export default Main;

