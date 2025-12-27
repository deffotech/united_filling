import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/partnership/Breadcrumb';
import HeroSection from '@/components/partnership/HeroSection';
import DetailsSection from '@/components/partnership/DetailsSection';
import ComparisonTable from '@/components/proprietorship/ComparisonTable';
import DocumentsSection from '@/components/partnership/DocumentsSection';
import Sidebar from '@/pages/sideBar';

const Partnership = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          <Breadcrumb />
          <div>
            <div className="lg:col-span-8 space-y-6">
              <HeroSection />
              <DetailsSection />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h2>
                <ComparisonTable />
              </div>
              <DocumentsSection />
            </div>
            {/* <aside className="lg:col-span-4">
              <Sidebar />
            </aside> */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Partnership;
