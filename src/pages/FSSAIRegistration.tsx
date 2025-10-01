
import Header from '@/components/Header';
import Breadcrumb from '@/components/fssai-registration/Breadcrumb';
import HeroSection from '@/components/fssai-registration/HeroSection';
import DocumentsSection from '@/components/fssai-registration/DocumentsSection';
import DetailsSection from '@/components/fssai-registration/DetailsSection';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const FSSAIRegistration = () => {
  return (
    <div className="bg-white min-h-screen">
   
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <DocumentsSection />
              <DetailsSection />
            </div>
            <aside className="lg:col-span-4">
            </aside>
          </div>
        </main>
  </div>
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default FSSAIRegistration;
