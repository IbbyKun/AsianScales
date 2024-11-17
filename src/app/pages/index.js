'use client';

import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Partners from '../../components/Partners';
import OurCompany from '../../components/OurCompany';
import OurPeople from '../../components/OurPeople';
import OurCustomers from '../../components/OurCustomers';
import TrendingProducts from '../../components/TrendingProducts';
import Categories from '../../components/Categories';
import ServicesPage from '../../components/Services';
import Testimonials from '../../components/Testemonials';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

const ParallaxPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* <div className="md:pt-16 pt-8">
        <div className="sticky top-0 z-10 bg-white"> */}
      <HeroSection />
      {/* </div>
        <div className="sticky top-0 z-10 bg-white"> */}
      <Partners />
      {/* </div>
        <div className="sticky top-0 z-20 bg-white"> */}
      <OurCompany />
      {/* </div>
        <div className="sticky z-30 bg-white"> */}
      <OurPeople />
      {/* </div>
        <div className="sticky top-0 z-40 bg-white"> */}
      <OurCustomers />
      {/* </div>
        <div className="sticky z-50 bg-white"> */}
      <TrendingProducts subtitle={true} />
      {/* </div>
        <div className="sticky top-0 z-60 bg-white"> */}
      <Categories />
      {/* </div>
        <div className="sticky z-70 bg-white"> */}
      <ServicesPage />
      {/* </div>
        <div className="sticky top-0 z-80 bg-white"> */}
      <Testimonials />
      {/* </div>
        <div className="sticky top-0 z-90 bg-white"> */}
      <Gallery subtitle={true} />
      {/* </div>
        <div className="sticky z-100 bg-white"> */}
      <Footer />
      {/* </div>
      </div> */}
    </div>
  );
};

export default ParallaxPage;
