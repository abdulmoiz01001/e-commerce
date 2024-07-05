import { useInterval } from '@chakra-ui/react';

import React, { useState } from 'react';
import star from '../assets/star.png'


const CarouselComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slides = [
    {
      image: 'https://th.bing.com/th/id/R.d7892d4f9aa766b5bfcbfbac3eb8dac0?rik=9o2b8eDDkrcrQw&pid=ImgRaw&r=0',
      text: 'Discover our exclusive collection of premium suits tailored to perfection.',
      button: 'Shop Suits',
      category: 'suits'
    },
    {
      image: 'https://th.bing.com/th/id/R.a92aee1ea3d5226671f83ec87147cc0f?rik=Tjfu5fYesvoLkQ&pid=ImgRaw&r=0',
      text: 'Elevate your casual wardrobe with our stylish and comfortable casual wear.',
      button: 'Explore Casual Wear',
      category: 'casual wear'
    },
    {
      image: 'https://th.bing.com/th/id/R.728ec54a1ad8cf2676e223c6a126cd6f?rik=Zbn8EukfW5iPrA&pid=ImgRaw&r=0',
      text: 'Find the perfect business attire that combines professionalism with style.',
      button: 'Shop Business Attire',
      category: 'business attire'
    },
    {
      image: 'https://th.bing.com/th/id/R.3a8a2c3a2e7c3b0c8f14c4f14d6d6b4d?rik=NPZ4NINBnk8SLg&pid=ImgRaw&r=0',
      text: 'Accessorize with our premium selection of ties, belts, and more.',
      button: 'Browse Accessories',
      category: 'accessories'
    }
  ];
  
  
  // setInterval(goToNext, 5000);
  useInterval(()=>{
    goToNext();
  },5000)

  return (
    <div className="relative xs:w-full  xxs:w-full shadow-2xl xxs:shadow-none rounded-xl w-[40%]  mx-auto overflow-hidden">
      <div className="flex xs:h-full xxs:h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full gap-8 flex flex-col xxs:flex-col items-center justify-evenly xs:p-0 xxs:p-0 p-4">
           <div className='w-60 flex justify-evenly items-center' >
            <img width={500} height={500} src={star} alt={`Slide ${index}`} className="w-[20px]" />
            <img width={500} height={500} src={star} alt={`Slide ${index}`} className="w-[20px]" />
            <img width={500} height={500} src={star} alt={`Slide ${index}`} className="w-[20px]" />
            <img width={500} height={500} src={star} alt={`Slide ${index}`} className="w-[20px]" />
            <img width={500} height={500} src={star} alt={`Slide ${index}`} className="w-[20px]" />
           </div>
           <div className='w-[80%] text-center'>
            <h1 className='text-2xl xxs:text-lg mb-8 font-bold'>“{slide.text}”</h1>
            <p className='text-lg xxs:text-sm font-bold'>{slide.button}</p>
            <p className='text-lg xxs:text-sm font-bold'>{slide.category}</p>
           </div>
          </div>
        ))}
      </div>
      <button
        onClick={()=>goToPrevious()}
        className=" absolute top-1/2 left-4 premium-button bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={()=>goToNext()}
        className="absolute top-1/2 right-4 premium-button bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselComp;
