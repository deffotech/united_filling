import { Star, CheckCircle } from 'lucide-react';

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
            <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="Nidhi Company Registration" className="rounded-lg w-full h-auto" />
            <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Documents Required</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>PAN Card of Directors</li>
                    <li>Aadhaar Card of Directors</li>
                    <li>Passport Size Photos</li>
                    <li>Address Proof</li>
                    <li><Link to="#" className="text-blue-600 hover:underline">Load More</Link></li>
                </ul>
            </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">Nidhi Company Registration</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
            </div>
            <span className="ml-2 text-gray-600 text-sm">(8245)</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">Register your Nidhi Company for mutual benefit activities.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-green-200 bg-green-50/50 rounded-lg p-4 flex flex-col justify-between">
                <CardContent className="p-4">
            <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
              2 Exclusive Offers
            </div>
            <h4 className="font-bold mt-2">Nidhi Company Registration</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Company Name Reservation
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                DIN & DSC for Directors
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                MOA & AOA Drafting
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Nidhi Company Registration
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <AddToCartButton
                serviceId="nidhi-company-registration"
                serviceName="Nidhi Company Registration"
                price={39999}
                className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                variant="outline"
              >
                ADD TO CART - ₹39,999
              </AddToCartButton>
              <AddToWishlistButton
                serviceId="nidhi-company-registration"
                serviceName="Nidhi Company Registration"
                price={39999}
              />
            </div>
          </CardContent>
            </div>
            <div className="border border-yellow-200 bg-yellow-50/50 rounded-lg p-4 flex flex-col justify-between">
                 <CardContent className="p-4">
            <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block">
              2 Exclusive Offers
            </div>
            <h4 className="font-bold mt-2">Nidhi Company + GST</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Nidhi Company Registration
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                GST Registration
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                Bank Account Opening Support
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                LEDGERS Software - 1 Year License
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <AddToCartButton
                serviceId="nidhi-company-gst-registration"
                serviceName="Nidhi Company + GST"
                price={44999}
                className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                variant="outline"
              >
                ADD TO CART - ₹44,999
              </AddToCartButton>
              <AddToWishlistButton
                serviceId="nidhi-company-gst-registration"
                serviceName="Nidhi Company + GST"
                price={44999}
              />
            </div>
          </CardContent>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <Link to="#" className="text-blue-600 hover:underline">Terms and conditions</Link>
            <Link to="#" className="text-blue-600 hover:underline">Refer a Friend</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;