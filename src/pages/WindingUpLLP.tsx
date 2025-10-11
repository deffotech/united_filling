import Breadcrumb from "@/components/winding-up-company/Breadcrumb";
import HeroSection from "@/components/winding-up-company/HeroSection";
import DetailsSection from "@/components/winding-up-company/DetailsSection";
import DocumentsSection from "@/components/winding-up-company/DocumentsSection";

const WindingUpLLP = () => {
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

export default WindingUpLLP;
