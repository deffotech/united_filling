import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Authorized Capital Increase
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Increase your company's authorized share capital to support business expansion and growth. Professional assistance with MCA filings and compliance.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-green-600">₹5,999</span>
            <span className="text-gray-500 line-through">₹8,999</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">33% OFF</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Board Resolution Preparation</li>
                <li>• MCA Form SH-7 Filing</li>
                <li>• MOA Amendment Support</li>
                <li>• Stamp Duty Payment</li>
                <li>• Expert Consultation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
