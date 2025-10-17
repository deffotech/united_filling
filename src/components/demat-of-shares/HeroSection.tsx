import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: 'demat-of-shares',
      name: 'Demat of Shares',
      price: 15000
    });
    
    toast({
      title: "Added to Cart",
      description: "Demat of Shares service has been added to your cart.",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Demat of Shares
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Convert your physical shares to electronic form with our professional demat services. Secure, fast, and compliant process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleAddToCart}
            >
              ADD TO CART - ₹15,000
            </Button>
            <Button size="lg" variant="outline">
              Talk to Expert
            </Button>
          </div>
          <div className="mt-6 flex items-center text-sm text-gray-500">
            <span>⭐ 4.8/5 Rating</span>
            <span className="mx-2">•</span>
            <span>10,000+ Shares Dematerialized</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <img 
            src="/lovable-uploads/cf8e8f5e-ca90-481e-a896-30d551e0e4c0.png" 
            alt="Demat of Shares" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
