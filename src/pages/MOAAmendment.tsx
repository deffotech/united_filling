// Footer provided by Layout
import Breadcrumb from "@/components/moa-amendment/Breadcrumb";
import HeroSection from "@/components/moa-amendment/HeroSection";
import DetailsSection from "@/components/moa-amendment/DetailsSection";
import DocumentsSection from "@/components/moa-amendment/DocumentsSection";

const MOAAmendment = () => {
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

export default MOAAmendment;