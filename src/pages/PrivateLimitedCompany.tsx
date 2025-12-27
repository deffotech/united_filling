
import Header from '@/components/Header';
import Breadcrumb from '@/components/private-limited-company/Breadcrumb';
import HeroSection from '@/components/private-limited-company/HeroSection';

import DetailsSection from '@/components/private-limited-company/DetailsSection';
import PricingSection from '@/components/private-limited-company/PricingSection';
import DocumentsSection from '@/components/private-limited-company/DocumentsSection';

const PrivateLimitedCompany = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
         <div>
            <div>
              <HeroSection />
              <PricingSection />
              <DetailsSection />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
                
              </div>
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

export default PrivateLimitedCompany;
