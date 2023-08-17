import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import axios from 'axios';


const ThumbnailList = () => {


  const [thumbnail, SetThumbnail] = useState([]);

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    axios.get('/api/thumbnail')
      .then(response => {
        SetThumbnail(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className='relative flex items-center w-full'>
      <BsChevronCompactLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={40}/>
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      {thumbnail.map((item, index) => (
        <img
        className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
         src={item} atl='Product Thumbnail' key={index} />
      ))}
      </div>
      <BsChevronCompactRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={40}/>


    </div>

  )


}



export default ThumbnailList;