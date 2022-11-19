import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className='w-[90vw] max-w-[1240px] mx-auto text-center mb-12'>
      <h1 className='text-bold text-2xl sm:text-4xl font-bold pb-4 '>
        Travel Photos
      </h1>
      <div className='grid sm:grid-cols-5 p-4 sm:p-12 gap-2 md:gap-3'>
        <div className='w-full h-full col-span-2 sm:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='portfolio'
            width='600'
            height='300'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='portfolio'
            width='300'
            height='300'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='portfolio'
            width='300'
            height='300'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='portfolio'
            width='300'
            height='300'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='portfolio'
            width='300'
            height='300'
          />
        </div>
      </div>
    </div>
  );
}
