
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";


const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-4">
            <img src="/lovable-uploads/6c61289a-5fac-4b42-8e54-dd6ad4218e44.png" alt="Barcode Registration" className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-8 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Barcode Registration</h1>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-600">(13)</span>
            </div>
            <p className="mt-4 text-gray-600">
              100 Barcodes with a validity of 1 year having a turnover of up to 5 crores.
            </p>
            <div className="mt-4">
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4 relative border-dashed border-green-500">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg">Basic</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Allotment Number</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Login credentials</li>
                </ul>
                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="Barcode Registration Basic"
                    serviceName="Barcode Registration - Basic"
                    price={4999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹4,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="Barcode Registration Basic"
                    serviceName="Barcode Registration - Basic"
                    price={4999}
                  />
                </div>
              </div>
              <div className="border rounded-lg p-4 relative border-dashed border-green-500">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg">Standard</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Allotment Number</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Barcode Login credentials</li>
                </ul>
                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="Barcode Registration Standard"
                    serviceName="Barcode Registration - Standard"
                    price={6999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹6,999
                  </AddToCartButton>
                  <AddToWishlistButton
                    serviceId="Barcode Registration Standard"
                    serviceName="Barcode Registration - Standard"
                    price={6999}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 text-sm">
                <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
                <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;

