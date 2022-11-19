import InstagramImg from './InstagramImg';
import Img1 from '../public/images/ig-img-1.jpeg';
import Img2 from '../public/images/ig-img-2.jpeg';
import Img3 from '../public/images/ig-img-3.jpeg';
import Img4 from '../public/images/ig-img-4.jpeg';
import Img5 from '../public/images/ig-img-5.jpeg';
import Img6 from '../public/images/ig-img-6.jpeg';

export default function Instagram() {

    return (
        <div className='max-w-[1240px] mx-auto text-center py-4'>
            <p className='text-2xl text-bold capitalize font-bold'>Follow me on instagram</p>
            <p className='mb-4 font-medium'>@capture</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1} />
            <InstagramImg socialImg={Img2} />
            <InstagramImg socialImg={Img3} />
            <InstagramImg socialImg={Img4} />
            <InstagramImg socialImg={Img5} />
            <InstagramImg socialImg={Img6} />
            </div>
        </div>

    )
}
