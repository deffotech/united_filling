import { Star, ChevronRight } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import { Card, CardContent } from "@/components/ui/card";


const HeroSection = () => {
  return (
    <section className="flex gap-9 items-start" >
      <div >
        <img 
          src="/assets/gst-return.jpg"
          alt="GST Services"
          className="rounded-lg shadow-md w-50 h-50 "
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">GST Revocation</h1>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current text-gray-300" />
          </div>
          <span className="ml-2 text-sm text-gray-600">(28)</span>
        </div>
        <p className="mt-4 text-gray-600">
          GST Revocation service by United Filings helps businesses restore their
          canceled GST registration by assisting with application preparation,
          submission, and follow-up. Our experts ensure seamless and timely
          reinstatement, allowing businesses to resume operations without
          interruptions.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border rounded-lg shadow-sm bg-stone-50 border-dashed border-orange-400">
            <CardContent className="p-4">
              <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold text-gray-800">
                Andaman and Nicobar Islands
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Filing Revocation Application</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Followup and Clarifications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Reactivated GSTIN</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>GST Compliance Advisory</span>
                </li>
              </ul>
             <div className="flex gap-2 mt-4">
                    <AddToCartButton
                      serviceId="Non - Audited - ISO 9001:2018"
                      serviceName="Non - Audited - ISO 9001:2018"
                      price={2999}
                      className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                      variant="outline"
                    >
                      ADD TO CART - ₹2,999
                    </AddToCartButton>
                    <AddToWishlistButton
                      serviceId="Non - Audited - ISO 9001:2018"
                      serviceName="Non - Audited - ISO 9001:2018"
                      price={2999}
                    />
                  </div>
            </CardContent>
          </Card>
          <Card className="border rounded-lg shadow-sm bg-stone-50 border-dashed border-orange-400">
            <CardContent className="p-4">
              <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold text-gray-800">Andhra Pradesh</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Filing Revocation Application</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Followup and Clarifications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>Reactivated GSTIN</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" />{" "}
                  <span>GST Compliance Advisory</span>
                </li>
              </ul>
              <div className="flex gap-2 mt-4">
                    <AddToCartButton
                      serviceId="Non - Audited - ISO 9001:2018"
                      serviceName="Non - Audited - ISO 9001:2018"
                      price={2999}
                      className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                      variant="outline"
                    >
                      ADD TO CART - ₹2,999
                    </AddToCartButton>
                    <AddToWishlistButton
                      serviceId="Non - Audited - ISO 9001:2018"
                      serviceName="Non - Audited - ISO 9001:2018"
                      price={2999}
                    />
                  </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
