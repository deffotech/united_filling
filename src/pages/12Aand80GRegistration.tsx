import Breadcrumb from '@/components/12a-80g-registration/Breadcrumb';
import HeroSection from '@/components/12a-80g-registration/HeroSection';
import DetailsSection from '@/components/12a-80g-registration/DetailsSection';
import DocumentsSection from '@/components/12a-80g-registration/DocumentsSection';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const TwelveAand80GRegistration = () => {
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

export default TwelveAand80GRegistration;
