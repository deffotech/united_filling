
import Header from "@/components/Header";
import Breadcrumb from "@/components/fdi-filing-rbi/Breadcrumb";
import HeroSection from "@/components/fdi-filing-rbi/HeroSection";
import DetailsSection from "@/components/fdi-filing-rbi/DetailsSection";

const FDIFilingWithRBI = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3 space-y-8">
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

export default FDIFilingWithRBI;
