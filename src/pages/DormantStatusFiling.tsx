import Breadcrumb from '@/components/dormant-status-filing/Breadcrumb';
import HeroSection from '@/components/dormant-status-filing/HeroSection';
import DetailsSection from '@/components/dormant-status-filing/DetailsSection';
import DocumentsSection from '@/components/dormant-status-filing/DocumentsSection';

const DormantStatusFiling = () => {
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
export default DormantStatusFiling;
