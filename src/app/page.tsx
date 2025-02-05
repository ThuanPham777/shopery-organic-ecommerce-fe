import Brand from '@/components/Brand/Brand';
import Categories from '@/components/Categories/Categories';
import ClientTestimonial from '@/components/ClientTestiomial/ClientTestiomial';
import Feature from '@/components/Feature/Feature';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import IntroVideo from '@/components/IntroVideo/IntroVideo';
import TeamMembers from '@/components/TeamMembers/TeamMembers';
import Title from '@/components/Title';

export default function Home() {
  return (
    <div className='space-y-12'>
      <HeroSlider />
      <Feature />
      <HeroBanner />
      <div className='px-4'>
        <Title
          title='Category'
          description='Shop By Top Categories'
        />
        <Categories />
      </div>
      <div className='px-4'>
        <Title
          title='Products'
          description='Our Featured Products'
        />
        <FeaturedProducts />
      </div>
      <IntroVideo />
      <div className='px-4 py-8'>
        <Title
          title='Team'
          description='Our Professional Members'
        />
        <TeamMembers />
      </div>
      <div className='bg-gray-200 py-8 px-4'>
        <Title
          title='Client Testimonial'
          description='What our Client Says'
        />
        <ClientTestimonial />
      </div>
      <Brand />
    </div>
  );
}
