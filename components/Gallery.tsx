import Image from 'next/image';
import { useState } from 'react';
import { sliders } from './data/sliderData';
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {FaArrowAltCircleRight} from 'react-icons/fa'

export enum Direction {
  Left = 'LEFT',
  Right = 'RIGHT',
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const length = sliders.length - 1;

  const handleSlide = (direction: Direction) => {
    if (direction === 'LEFT') {
      setCurrent(current !== 0 ? current - 1 : length);
      return;
    }
    setCurrent(current !== length ? current + 1 : 0);
  };

  return (
    <div className='max-w-[1240px] mx-auto mb-[4rem] sm:mb-[8rem] overflow-hidden' id='gallery'>
      <h1 className='text-center text-4xl text-bold p-8'>Gallery</h1>

      <div className='relative flex justify-center w-[90vw] lg:w-[1240px] h-300px mx-auto h-[300px] sm:h-[500px] p-4'>
      {sliders.map((slider, index) => (
            <div
            style={{height: '100%', width: '100%'}}
            key={index}
            className={index === current ? 'opacity-[1] ease-out duration-1000' : 'opacity-[0]'}
            >
            <FaArrowAltCircleLeft onClick={() => handleSlide(Direction.Left)} size={40} className='absolute top-[50%] left-[30px] z-[2] cursor-pointer text-white/70'/>
            {index === current && (
                <Image
                src={slider.image}
                alt='/'
                fill={true}
                style={{objectFit: 'cover'}}
              />
            )}
            <FaArrowAltCircleRight onClick={() => handleSlide(Direction.Right)} size={40} className='absolute top-[50%] right-[30px] z-[2] text-white/70'/>
            </div>
            ))}
            </div>
            </div>
  );
}
