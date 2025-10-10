import { Card, CardContent } from "@/components/ui/card";
import { Star, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAdd = (item: { id: string; name: string; price: number }) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-5 p-6 flex flex-col justify-between bg-gray-50">
            <img
              src="/assets/startup-india.avif"
              alt="Startup India Certification"
              className="rounded-lg object-cover w-full"
            />

            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold text-gray-800">Proof of Funding</p>
              <p className="mt-2">Documents of Awards</p>
              <p className="mt-2">Patent documents</p>
              <p className="mt-2 text-blue-600 font-semibold cursor-pointer">Load More</p>
            </div>
          </div>

          <div className="md:col-span-7 p-6">
            <h1 className="text-2xl font-bold text-gray-800">Startup India</h1>

            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
              </div>
              <span className="text-gray-600 ml-2 text-sm">(824)</span>
            </div>

            <p className="mt-3 text-gray-600">Easily get Startup India registration through DPIIT.</p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="border rounded-lg p-4">
                <p className="text-xs text-green-600 bg-green-100 rounded-full px-2 py-0.5 inline-block font-semibold">3 Exclusive Offers</p>
                <h3 className="font-bold mt-2">Startup India Registration</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Business Consultation</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Pitch Deck</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Application Filing</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>DPIIT Recognition</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Startup India Certificate</span></li>
                </ul>

                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="startup-india-basic"
                    serviceName="Startup India Registration"
                    price={3999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹3,999
                  </AddToCartButton>

                  <AddToWishlistButton
                    serviceId="startup-india-basic"
                    serviceName="Startup India Registration"
                    price={3999}
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-xs text-green-600 bg-green-100 rounded-full px-2 py-0.5 inline-block font-semibold">2 Exclusive Offers</p>
                <h3 className="font-bold mt-2">Startup India + DSC</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Business Consultation</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Pitch Deck</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Application Filing</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>DPIIT Recognition</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Startup India Certificate</span></li>
                  <li className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" /><span>Class 3 DSC - Company</span></li>
                </ul>

                <div className="flex gap-2 mt-4">
                  <AddToCartButton
                    serviceId="startup-india-dsc"
                    serviceName="Startup India + DSC"
                    price={5999}
                    className="flex-1 bg-white text-green-600 border border-green-600 hover:bg-green-50"
                    variant="outline"
                  >
                    ADD TO CART - ₹5,999
                  </AddToCartButton>

                  <AddToWishlistButton
                    serviceId="startup-india-dsc"
                    serviceName="Startup India + DSC"
                    price={5999}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4 text-sm">
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
