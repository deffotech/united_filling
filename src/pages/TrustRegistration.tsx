
import Breadcrumb from '@/components/trust-registration/Breadcrumb';
import HeroSection from '@/components/trust-registration/HeroSection';
import PricingSection from '@/components/trust-registration/PricingSection';
import DetailsSection from '@/components/trust-registration/DetailsSection';
import DocumentsSection from '@/components/trust-registration/DocumentsSection';

const TrustRegistration = () => {
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
              <DocumentsSection />
            </div>
            <aside className="lg:col-span-4">
            
            </aside>
          </div>
        </main>
      </div>
        
    </div>
  );
};

export default TrustRegistration;
