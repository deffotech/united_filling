import { ReactNode } from 'react';
import { } from 'react-router-dom';
import Sidebar from '@/pages/sideBar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50/50">
        <main className="max-w-screen-xl mx-auto px-4 py-6">
          {showSidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                {children}
              </div>
              <aside className="lg:col-span-4">
                <Sidebar />
              </aside>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
  <Footer />
    </div>
  );
};

export default Layout;