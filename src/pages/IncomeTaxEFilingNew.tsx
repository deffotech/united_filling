
import Header from "@/components/Header";
import Breadcrumb from "@/components/income-tax-e-filing-new/Breadcrumb";
import HeroSection from "@/components/income-tax-e-filing-new/HeroSection";
import ServiceSelection from "@/components/income-tax-e-filing-new/ServiceSelection";
import QuickSteps from "@/components/income-tax-e-filing-new/QuickSteps";
import WhoNeedsToFile from "@/components/income-tax-e-filing-new/WhoNeedsToFile";

const IncomeTaxEFilingNew = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className=" gap-8 mt-8">
          <div className="lg:col-span-3 space-y-8">
            <HeroSection />
            <ServiceSelection />
            <QuickSteps />
            <WhoNeedsToFile />
          </div>
          <div className="lg:col-span-1">
          </div>
        </div>
  </main>
    </div>
  );
};

export default IncomeTaxEFilingNew;
