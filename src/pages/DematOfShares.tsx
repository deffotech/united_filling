import Breadcrumb from "@/components/demat-of-shares/Breadcrumb";
import HeroSection from "@/components/demat-of-shares/HeroSection";
import DetailsSection from "@/components/demat-of-shares/DetailsSection";
import DocumentsSection from "@/components/demat-of-shares/DocumentsSection";

const DematOfShares = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <HeroSection />
      <DetailsSection />
  <DocumentsSection />
    </div>
  );
};

export default DematOfShares;