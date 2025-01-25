import Brand from '@/components/Brand/Brand';
import Categories from '@/components/Categories/Categories';
import ClientTestimonial from '@/components/ClientTestiomial/ClientTestiomial';
import Feature from '@/components/Feature/Feature';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import IntroVideo from '@/components/IntroVideo/IntroVideo';
import TeamMembers from '@/components/TeamMembers/TeamMembers';

export default function Home() {
  return (
    <div className='space-y-12'>
      <HeroSlider />
      <Feature />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <IntroVideo />
      <TeamMembers />
      <ClientTestimonial />
      <Brand />
    </div>
  );
}
