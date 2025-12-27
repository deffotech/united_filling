
import Breadcrumb from '@/components/public-limited-company/Breadcrumb';
import HeroSection from '@/components/public-limited-company/HeroSection';
import DetailsSection from '@/components/public-limited-company/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';
import PricingSection from '@/components/public-limited-company/PricingSection';
import DocumentsSection from '@/components/public-limited-company/DocumentsSection';

const PublicLimitedCompany = () => {
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
      <DocumentsSection />
    </>
  );
};

export default PublicLimitedCompany;
