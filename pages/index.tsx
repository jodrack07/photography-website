import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <Hero
        heading='Capure Photography'
        message='Capure moments in nature and keep them alive'
      />
      <Gallery />
    </>
  );
}
