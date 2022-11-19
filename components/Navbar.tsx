import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavigationMenu from './NavigationMenu';

export default function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState('transparent');
  const [textColorOnScroll, setTextColorOnScroll] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setBgOnScroll('white');
        setTextColorOnScroll('black');
      } else {
        setBgOnScroll('transparent');
        setTextColorOnScroll('white');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${bgOnScroll}` }}
      className='fixed top-0 left-0 w-full z-[999] ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between p-4 text-white'>
        <Link href='/'>
          <h1 style={{color: `${textColorOnScroll}`}} className='text-2xl sm:text-bold sm:text-4xl'>Capture.</h1>
        </Link>
        <div
          className='sm:hidden px-2 py-1 z-10 ease-out duration-1000'
          onClick={() => setshowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <AiOutlineClose
              size={24}
              style={{
                color: 'red',
                height: '30px',
                width: '30px',
                borderRadius: '50%',
                border: '1px solid #fff',
              }}
            />
          ) : (
            <AiOutlineMenu size={24} style={{color: `${textColorOnScroll}`}} />
          )}
        </div>
        <NavigationMenu
          device='desktop'
          textColorOnScroll={textColorOnScroll}
        />
        <NavigationMenu
          device='mobile'
          state={showMobileMenu}
        />
      </div>
    </nav>
  );
}
