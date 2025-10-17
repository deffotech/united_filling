import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "share-transfer",
      name: "Share Transfer Service",
      price: 3999,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Transfer Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional assistance for share transfer procedures. Handle ownership changes, documentation, and regulatory compliance with expert support.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-green-600">₹3,999</span>
            <span className="text-gray-500 line-through">₹5,999</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">33% OFF</span>
          </div>
          <Button onClick={handleAddToCart} className="mt-6 bg-green-600 hover:bg-green-700">
            Get Started
          </Button>
        </div>
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Share Transfer Documentation</li>
                <li>• Board Resolution Preparation</li>
                <li>• Share Certificate Update</li>
                <li>• Register of Members Update</li>
                <li>• Compliance Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
