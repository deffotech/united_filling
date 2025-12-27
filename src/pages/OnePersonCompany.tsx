
import Breadcrumb from '@/components/opc/Breadcrumb';
import HeroSection from '@/components/opc/HeroSection';
import DetailsSection from '@/components/opc/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';
import PricingSection from '@/components/opc/PricingSection';

const OnePersonCompany = () => {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <PricingSection/>
      <DetailsSection />
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
        <ComparisonTable />
      </div>
    </>
  );
};

export default OnePersonCompany;
