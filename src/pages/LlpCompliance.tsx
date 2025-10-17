
import Header from "@/components/Header";
import Breadcrumb from "@/components/llp-compliance/Breadcrumb";
import DetailsSection from "@/components/llp-compliance/DetailsSection";
import HeroSection from "@/components/llp-compliance/HeroSection";

const LlpCompliance = () => {
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

export default LlpCompliance;

