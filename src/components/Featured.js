import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const Featured = () => {
  const sliders = [
    {
      url: 'https://i.ytimg.com/vi/Ro8s63DKlO0/maxresdefault.jpg'
    },
    {
      url: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/126624.jpg'
    },
    {
      url: 'https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-4.jpg'
    },
  ]
 const [currentIndex, setCurrentIndex] = useState(0)

 const prevSlider = ()=>{
  const isFirstSlide = currentIndex === 0
  const newIndex = isFirstSlide ? sliders.length-1 : currentIndex -1
  setCurrentIndex(newIndex)
 }
 const nextSlider = ()=> {
   const isLastSlide = currentIndex === sliders.length-1
   const newIndex = isLastSlide ? 0: currentIndex +1
   setCurrentIndex(newIndex)
 }

 const moveToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex)
 }
 return (
    <div className='max-w-[1900px] h-[500px] w-full py-4 px-4 relative group'>
       <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>

        </div>
        <div className='hidden group-hover:block absolute top-[50%] ] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {
            sliders.map((sliderItems, slideIndex) => (
              <div key={slideIndex} onClick={() => moveToSlide (slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled />
              </div>
            ))
          }
        </div>
    </div>
  )
 

  
}

export default Featured
