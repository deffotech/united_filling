import { Star, CheckCircle } from 'lucide-react';

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid md:grid-cols-12 ">
        <div className="md:col-span-5">
            {/* <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="Nidhi Company Registration" className="rounded-lg w-full h-auto" /> */}
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;