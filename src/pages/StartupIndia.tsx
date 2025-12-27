
import Header from '@/components/Header';
import Breadcrumb from '@/components/startup-india/Breadcrumb';
import HeroSection from '@/components/startup-india/HeroSection';

import DetailsSection from '@/components/startup-india/DetailsSection';
import DocumentsSection from '@/components/startup-india/DocumentsSection';
import PopularSearches from '@/components/business-registration/PopularSearches';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const StartupIndia = () => {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div >
            <div className="col-span-12 lg:col-span-9">
              <HeroSection />
           
              <DetailsSection />
              <DocumentsSection />
            </div>
            <aside className="col-span-12 lg:col-span-3">
             
            </aside>
          </div>
          <PopularSearches />
        </main>
  </div>
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default StartupIndia;
