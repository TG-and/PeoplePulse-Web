import Hero from '../sections/Hero';
import Clients from '../sections/Clients';
import Features from '../sections/Features';
import Modules from '../sections/Modules';
import AIDriven from '../sections/AIDriven';
import Pricing from '../sections/Pricing';
import Stats from '../sections/Stats';
import CTA from '../sections/CTA';
import Blog from '../sections/Blog';
import Testimonials from '../sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Modules />
      <AIDriven />
      <Pricing />
      <Stats />
      <CTA />
      <Blog />
      <Testimonials />
    </>
  );
}
