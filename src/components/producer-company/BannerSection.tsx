import { Star } from "lucide-react";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
            alt="Producer Company Registration" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">PRODUCER COMPANY</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">REGISTRATION</h3>
            <p className="text-blue-100 text-sm md:text-base">
              From Start to Finish, We Help You Launch your business with United Filings
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Producer Company</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-blue-100 text-sm">(13147)</span>
          </div>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Assistance for GST registration with 1 year LEDGERS Accounting software license for invoicing, GST E-invoicing and GST filing through LEDGERS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;