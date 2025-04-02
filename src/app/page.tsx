import AboutSection from '@/components/AboutSection';
import BannerHome from '@/components/BannerHome';
import FormHome from '@/components/FormHome';
import Maps from '@/components/Maps';
import Opinions from '@/components/Opinions';
import OurServices from '@/components/OurServices';
import SubBannerHome from '@/components/SubBannerHome';

export default function Home() {
  return (
    <div className="pt-[96px]">
      {/* <h1 className='text-primary-regular text-h1'>Tu expediente italiano</h1> */}
      <BannerHome />
      <SubBannerHome />
      <OurServices />
      <AboutSection />
      <Opinions />
      <FormHome />
      <Maps />
    </div>
  );
}
