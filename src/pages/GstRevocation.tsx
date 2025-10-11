import Breadcrumb from "@/components/gst-revocation/Breadcrumb";
import HeroSection from "@/components/gst-revocation/HeroSection";
import DetailsSection from "@/components/gst-revocation/DetailsSection";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const GstRevocation = () => {
  return (
    <div className="bg-white">
     
      <main className="max-w-screen-xl mx-auto pb-8 md:px-8 lg:px-5">
        <Breadcrumb />
        <div>
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

export default GstRevocation;

