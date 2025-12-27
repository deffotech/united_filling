import Breadcrumb from '@/components/nidhi-company/Breadcrumb';
import HeroSection from '@/components/nidhi-company/HeroSection';
import DetailsSection from '@/components/nidhi-company/DetailsSection';
import DocumentsSection from '@/components/nidhi-company/DocumentsSection';
import PricingSection from '@/components/nidhi-company/PricingSection';

const NidhiCompany = () => {
  return (
    
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
           <div>
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <PricingSection />
             
              <DetailsSection />
              
            </div>
           
          </div>
        </main>
  </div>
    </div>
  );
};

export default NidhiCompany;