import React from 'react';
import './Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// 5cKcHwMzZsJ4QW6HbQW2YyHW6w0naYVa

function Main(){
  const mainurl = "https://wallhaven.cc/api/v1/search"
  const api_key = "5cKcHwMzZsJ4QW6HbQW2YyHW6w0naYVa";

  //https://wallhaven.cc/api/v1/w/<ID>?apikey={api_key}
  //https://wallhaven.now.sh/search?tagname=christmas
  //https://wallhaven.cc/api/v1/search?apikey=<API KEY>
  const URL = `${mainurl}?q=christmas&apikey=${api_key}`;

    const [backgroundimage, setBackgroundimage] = useState(''); 

    const fetchBackground = async () => {
    try {
      const response = await axios.get(URL);
      // if(!response.data.results) {return}
      //if (response.data.results.length > 0) {
        // const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${response.data.results[0].backdrop_path}`;
        // setBackgroundimage(backgroundImageUrl);
       const dataset = response.data.data;
       let randomImage = Math.floor(Math.random() * dataset.length);
       setBackgroundimage(dataset[randomImage].path);
     
       console.log(dataset[randomImage]); // result
         
      //}
       
    } catch (e) {
     
      console.log(e);
    }

  
    
  };

    useEffect(() => {
    fetchBackground();
  }, []);


    return (
    <main
     style={{  
        backgroundImage: `url(${backgroundimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
        width:'100vw'
      }}
    >
      <div className='main'>{backgroundimage}</div>
    </main>
  );

}

export default Main;

