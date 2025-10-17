
import Header from "@/components/Header";
import Breadcrumb from "@/components/itr6-return-filing/Breadcrumb";
import HeroSection from "@/components/itr6-return-filing/HeroSection";
import DetailsSection from "@/components/itr6-return-filing/DetailsSection";

const ITR6ReturnFiling = () => {
  return (
    <div className="bg-white">
     
      <main className="px-4 py-8 md:px-8 lg:px-10">
        <Breadcrumb />
        <div className="mt-8">
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

export default ITR6ReturnFiling;
