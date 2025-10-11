import Breadcrumb from '@/components/adt1-filing/Breadcrumb';
import HeroSection from '@/components/adt1-filing/HeroSection';
import DetailsSection from '@/components/adt1-filing/DetailsSection';
import DocumentsSection from '@/components/adt1-filing/DocumentsSection';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const ADT1Filing = () => {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <DetailsSection />
      <DocumentsSection />
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </>
  );
};


export default ADT1Filing;
