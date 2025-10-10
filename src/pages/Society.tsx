import Breadcrumb from '@/components/society-registration/Breadcrumb';
import HeroSection from '@/components/society-registration/HeroSection';
import DetailsSection from '@/components/society-registration/DetailsSection';
import DocumentsSection from '@/components/society-registration/DocumentsSection';

const Society = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div >
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <DetailsSection />
              <DocumentsSection />
            </div>
            <aside className="lg:col-span-4">
              {/* Add contact form or additional content here if needed */}
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Society;
