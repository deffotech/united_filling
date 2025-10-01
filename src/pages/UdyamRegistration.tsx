import Breadcrumb from "@/components/udyam-registration/Breadcrumb";
import HeroSection from "@/components/udyam-registration/HeroSection";
import DetailsSection from "@/components/udyam-registration/DetailsSection";
import DocumentsSection from "@/components/udyam-registration/DocumentsSection";

const UdyamRegistration = () => {
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

export default UdyamRegistration;