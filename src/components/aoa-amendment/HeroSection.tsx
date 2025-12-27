import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AOA Amendment Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional Articles of Association amendment service. Modify your company's internal governance rules with expert legal assistance.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-green-600">₹4,499</span>
            <span className="text-gray-500 line-through">₹6,999</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">36% OFF</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• AOA Amendment Drafting</li>
                <li>• Board Resolution Support</li>
                <li>• MCA Form Filing</li>
                <li>• Legal Compliance Check</li>
                <li>• Professional Consultation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
