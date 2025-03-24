import AboutSection from '@/components/AboutSection';
import BannerHome from '@/components/BannerHome';
import OurServices from '@/components/OurServices';
import SubBannerHome from '@/components/SubBannerHome';

export default function Home() {
  return (
    <>
      {/* <h1 className='text-primary-regular text-h1'>Tu expediente italiano</h1> */}
      <BannerHome />
      <SubBannerHome />
      <OurServices />
      <AboutSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
