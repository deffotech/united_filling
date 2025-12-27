import { Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import { Link } from "react-router-dom";

const ConsultationCard = ({
  type,
  features,
}: {
  type: string;
  features: string[];
}) => {
  return (
    <Card className="border-dashed border-green-500 transition-shadow hover:shadow-lg">
      <div className="bg-green-100 text-green-700 text-xs font-bold py-1 px-3 inline-block rounded-br-lg rounded-tl-lg">
        2 Exclusive Offers
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold">30 Minutes - {type} Consultation</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
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
        </ul>
    
      </CardContent>
    </Card>
  );
};

const ConsultationView = () => {
  return (
    <div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div
              className="lg:col-span-5 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png')",
              }}
            >
              <div className="bg-blue-700/80 min-h-[250px] h-full flex flex-col justify-center items-center text-center p-8 text-white">
                <h2 className="text-3xl font-bold">Need Help With Business?</h2>
                <p className="text-lg mt-2">Consult Our Professionals</p>
              </div>
            </div>
            <div className="lg:col-span-7 p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Business Consultation
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
                <span className="ml-2 text-sm text-gray-600">(39)</span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Consult with top CAs, Lawyers, and business experts online,
                anytime, anywhere with United Filings! Get expert guidance on accounting,
                tax, legal, business, intellectual property & much more to help
                your business grow.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ConsultationCard
          type="CA"
          features={[
            "Online Consultation",
            "30 Minute Session",
            "Preferred language Selection",
            "Tax consultation",
            "Corporate Financial Consultation",
            "Consultation report - Financial",
          ]}
        />
        <ConsultationCard
          type="Lawyer"
          features={[
            "Online Consultation",
            "30 Minute Session",
            "Preferred language Selection",
            "Intellectual property consultation",
            "Corporate Legal Consultation",
            "Consultation report - Legal",
          ]}
        />
      </div>

      <div className="flex justify-between items-center mt-6 text-sm">
        <Link to="#" className="text-blue-600 hover:underline">
          Terms and conditions
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          Refer a Friend
        </Link>
      </div>

    </div>
  );
};

export default ConsultationView;
