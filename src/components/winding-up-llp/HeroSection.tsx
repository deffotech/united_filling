import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: 'winding-up-llp',
      name: 'Winding Up - LLP',
      price: 25000
    });
    
    toast({
      title: "Added to Cart",
      description: "Winding Up - LLP service has been added to your cart.",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Winding Up - LLP
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional LLP closure and winding up services. Complete legal compliance and smooth dissolution process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleAddToCart}
            >
              Add to Cart - ₹25,000
            </Button>
            <Button size="lg" variant="outline">
              Talk to Expert
            </Button>
          </div>
          <div className="mt-6 flex items-center text-sm text-gray-500">
            <span>⭐ 4.9/5 Rating</span>
            <span className="mx-2">•</span>
            <span>500+ LLPs Closed</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <img 
            src="/lovable-uploads/b3d90403-a3c9-455a-89d1-f26b7b7c0a1b.png" 
            alt="Winding Up LLP" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
