import Footer from '@/components/Footer';
import Breadcrumb from '@/components/nidhi-company/Breadcrumb';
import HeroSection from '@/components/nidhi-company/HeroSection';
import DetailsSection from '@/components/nidhi-company/DetailsSection';
import DocumentsSection from '@/components/nidhi-company/DocumentsSection';
import PricingSection from '@/components/nidhi-company/PricingSection';

const NidhiCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />
        <div className="mt-6 space-y-8">
          <HeroSection />
          <PricingSection/>
          <DetailsSection />
          <DocumentsSection />
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NidhiCompany;