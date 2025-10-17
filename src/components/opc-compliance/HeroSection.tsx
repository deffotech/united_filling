import { Star, ChevronRight } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <img
            src="/lovable-uploads/af854e9e-0988-40fc-859b-9b0377969feb.png"
            alt="OPC Compliance"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-800">OPC Compliance</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(525)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            File your business tax returns and maintain compliance seamlessly
            through United Filings.com. Get a Dedicated Accountant and LEDGERS compliance
            platform for your business.
          </p>

          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4">
              2 Exclusive Offers
            </div>
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Accountant
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Financial Statements
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                DIN E-KYC for 1 Director
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Income Tax Filing
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                MCA Annual Return Filing
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Commencement of Business
              </li>
            </ul>
           <div className="flex gap-2 mt-4">
                    <AddToCartButton
                      serviceId="OPC Compliance-Basic"
                      serviceName="OPC Compliance-Basic"
                      price={2999}
                      className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                      variant="outline"
                    >
                      ADD TO CART - ₹2,999
                    </AddToCartButton>
                    <AddToWishlistButton
                      serviceId="OPC Compliance-Basic"
                      serviceName="OPC Compliance-Basic"
                      price={2999}
                    />
                  </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-blue-600 border-b pb-4">
            <a href="#" className="hover:underline text-sm">
              Terms and conditions
            </a>
            <a href="#" className="hover:underline text-sm">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
