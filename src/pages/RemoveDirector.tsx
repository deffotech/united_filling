import Breadcrumb from "@/components/remove-director/Breadcrumb";
import HeroSection from "@/components/remove-director/HeroSection";
import DetailsSection from "@/components/remove-director/DetailsSection";
import DocumentsSection from "@/components/remove-director/DocumentsSection";

const RemoveDirector = () => {
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

export default RemoveDirector;
