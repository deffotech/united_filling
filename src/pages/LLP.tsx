
import Breadcrumb from '@/components/llp/Breadcrumb';
import HeroSection from '@/components/llp/HeroSection';
import DetailsSection from '@/components/llp/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';

import PricingSection from '@/components/llp/PricingSection';

const LLP = () => {
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
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
                <ComparisonTable />
              </div>
              
            </div>
          </div>
        </main>
  </div>
    </div>
  );
};

export default LLP;
