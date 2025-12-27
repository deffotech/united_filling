import Header from '@/components/Header';
import Breadcrumb from '@/components/dpt3-filing/Breadcrumb';
import HeroSection from '@/components/dpt3-filing/HeroSection';
import DetailsSection from '@/components/dpt3-filing/DetailsSection';
import DocumentsSection from '@/components/dpt3-filing/DocumentsSection';

const DPT3Filing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />
        <div className="mt-6 space-y-8">
          <HeroSection />
          <DetailsSection />
          <DocumentsSection />
        </div>
  </main>
    </div>
  );
};

export default DPT3Filing;