

import Breadcrumb from '@/components/proprietorship/Breadcrumb';
import HeroSection from '@/components/proprietorship/HeroSection';
import DetailsSection from '@/components/proprietorship/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';



const Proprietorship = () => {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <DetailsSection />
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
        <ComparisonTable />
      </div>
    </>
  );
};

export default Proprietorship;
