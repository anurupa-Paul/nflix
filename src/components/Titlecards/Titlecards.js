

import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css';
import card_data from '../../assets/card/card_data'

const Titlecards = ({title,category}) => {
  const [apidata, setApidata] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODVmN2ZmMGYzMjVkZTJmOTA2OTU5N2EyNDU2NGQ2YSIsIm5iZiI6MTc3MjU1MjYyNC41Nzc5OTk4LCJzdWIiOiI2OWE3MDFiMGRmODE3NzNjY2U4MWY2NzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RG0pYTUh3axtWbSCo-IMx8dm-mo5p2_KnwzJrVvAo0g'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}`, options)
      .then(res => res.json())
      .then(res => setApidata(res.results))
      .catch(err => console.error(err));
    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }
    // Cleanup event listener on unmount
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Nflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards;