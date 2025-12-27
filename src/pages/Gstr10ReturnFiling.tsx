
import Header from "@/components/Header";
import Breadcrumb from "@/components/gstr-10-return-filing/Breadcrumb";
import HeroSection from "@/components/gstr-10-return-filing/HeroSection";
import DetailsSection from "@/components/gstr-10-return-filing/DetailsSection";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Gstr10ReturnFiling = () => {
  return (
    <div className="bg-white">
     
      <main className="max-w-screen-xl mx-auto px-4 py-8 md:px-8 lg:px-16">
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
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default Gstr10ReturnFiling;
