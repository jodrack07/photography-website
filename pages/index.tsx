import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <>
      <Hero
        heading='Capure Photography'
        message='Capure moments in nature and keep them alive'
      />
      <Gallery />
      <Instagram />
    </>
  );
}
