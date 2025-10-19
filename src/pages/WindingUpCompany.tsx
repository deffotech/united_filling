
import Breadcrumb from "@/components/winding-up-company/Breadcrumb";
import HeroSection from "@/components/winding-up-company/HeroSection";
import DetailsSection from "@/components/winding-up-company/DetailsSection";
import DocumentsSection from "@/components/winding-up-company/DocumentsSection";

const WindingUpCompany = () => {
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


export default WindingUpCompany;
