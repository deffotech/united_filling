import Breadcrumb from '@/components/adt1-filing/Breadcrumb';
import HeroSection from '@/components/adt1-filing/HeroSection';
import DetailsSection from '@/components/adt1-filing/DetailsSection';
import DocumentsSection from '@/components/adt1-filing/DocumentsSection';

const ADT1Filing = () => {
  return (
    <>
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <HeroSection />
        <DetailsSection />
        <DocumentsSection />
      </div>
    </>
  );
};


export default ADT1Filing;
