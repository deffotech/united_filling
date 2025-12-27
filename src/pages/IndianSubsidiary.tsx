
import Header from '@/components/Header';
import Breadcrumb from '@/components/indian-subsidiary/Breadcrumb';
import HeroSection from '@/components/indian-subsidiary/HeroSection';
import DetailsSection from '@/components/indian-subsidiary/DetailsSection';
import RequirementsSection from '@/components/indian-subsidiary/RequirementsSection';

const IndianSubsidiary = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div >
            <div className="lg:col-span-8 space-y-8">
              <HeroSection />
              <DetailsSection />
              <RequirementsSection />
            </div>
            <aside className="lg:col-span-4">
            </aside>
          </div>
        </main>
  </div>
    </div>
  );
};

export default IndianSubsidiary;
