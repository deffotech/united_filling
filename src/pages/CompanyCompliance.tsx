
import Header from "@/components/Header";
import Breadcrumb from "@/components/company-compliance/Breadcrumb";
import DetailsSection from "@/components/company-compliance/DetailsSection";
import HeroSection from "@/components/company-compliance/HeroSection";
import PricingSection from "@/components/company-compliance/PricingSection";

const CompanyCompliance = () => {
  return (
    <div className="bg-white">
      
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
            <PricingSection />
            <DetailsSection />
          </div>
          <div className="lg:col-span-1">
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default CompanyCompliance;
