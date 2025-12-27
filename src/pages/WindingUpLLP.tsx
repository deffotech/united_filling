import Breadcrumb from "@/components/winding-up-llp/Breadcrumb";
import HeroSection from "@/components/winding-up-llp/HeroSection";
import DetailsSection from "@/components/winding-up-llp/DetailsSection";
import DocumentsSection from "@/components/winding-up-llp/DocumentsSection";

const WindingUpLLP = () => {
  return (
    <>
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <HeroSection />
        <DetailsSection />
        <DocumentsSection />
      </div>
    </>
  );
};

export default WindingUpLLP;
