
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <img 
            src="/lovable-uploads/5297086e-acf0-4b80-ad21-5c2e95a411d8.png" 
            alt="Company Compliance" 
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-800">Company Compliance</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="text-gray-600 ml-2">(3247)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Maintain accounts, MCA and Income Tax compliance for your company with dedicated Accountant and LEDGERS platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
