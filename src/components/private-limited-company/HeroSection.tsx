import { Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <img
            src="assets/company-registration.jpg"
            alt="Start a Business"
            className="rounded-lg w-full h-auto"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg mb-2">Documents Required</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>PAN Card</li>
              <li>Passport (Foreign Nationals Only)</li>
              <li>Aadhaar Card</li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Load More
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Company Registration
          </h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
            </div>
            <span className="ml-2 text-gray-600 text-sm">(12035)</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Instant Name Application for Company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
