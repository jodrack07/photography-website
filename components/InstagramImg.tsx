import Image, { StaticImageData } from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramImg({
  socialImg,
}: {
  socialImg: StaticImageData;
}) {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='image' className='w-full h-full' />
      <div className='absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 hover:bg-black/50 group'>
        <FaInstagram
          size={30}
          className='text-gray-300 hidden group-hover:block'
        />
      </div>
    </div>
  );
}
