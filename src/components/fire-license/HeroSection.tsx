import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 flex items-center justify-center p-4 bg-orange-50">
          <div className="text-center">
            <div className="text-6xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-gray-800">Fire License</h2>
          </div>
        </div>
        <div className="md:col-span-7 p-8">
          <h1 className="text-3xl font-bold">Fire License</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">(15)</span>
          </div>
          <p className="text-gray-600 mb-4">
            A Fire License is a state government-issued permit to ensure the safety of individuals in places that are prone to fire hazards.
          </p>

          <Card className="border-green-200 mt-6">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold mb-2">Fire License</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Application Preparation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Application Filing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Fire Safety Inspection
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500" />
                  Fire License Certificate
                </li>
              </ul>
              <div className="flex gap-2 mt-4">
                <AddToCartButton
                  serviceId="Fire License"
                  serviceName="Fire License"
                  price={5999}
                  className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                  variant="outline"
                >
                  ADD TO CART - ₹5,999
                </AddToCartButton>
                <AddToWishlistButton
                  serviceId="Fire License"
                  serviceName="Fire License"
                  price={5999}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
