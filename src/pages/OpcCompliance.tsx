
// Footer provided by Layout
import Header from "@/components/Header";
import Breadcrumb from "@/components/opc-compliance/Breadcrumb";
import DetailsSection from "@/components/opc-compliance/DetailsSection";
import HeroSection from "@/components/opc-compliance/HeroSection";


const OpcCompliance = () => {
  return (
    <div className="bg-white">
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection />
           
            <DetailsSection />
          </div>
          <div className="lg:col-span-1">
           
          </div>
        </div>
  </main>
    </div>
  );
};

export default OpcCompliance;
