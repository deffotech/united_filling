import { Card } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";


 const ServiceSelection = () => {
//   const services = [
//     {
//       title: "30 Minutes - Tax Consultation",
//       features: [
//         "Tax Consultation",
//         "Business Consultation", 
//         "Legal consultation",
//         "Commercial Consultation"
//       ]
//     },
//     {
//       title: "30 Minutes - Tax Consultation",
//       features: [
//         "Tax Consultation", 
//         "Business Consultation",
//         "Legal consultation",
//         "Commercial Consultation"
//       ]
//     }
//   ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Income Tax E-Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* {services.map((service, index) => (
          <Card key={index} className="p-6">
            <h3 className="font-semibold mb-4">{service.title}</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {feature}</li>
              ))} */}
            {/* </ul> */}
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
          {/* </Card> */}
        {/* // ))} */}
      </div>
    </section>
  );
 };
export default ServiceSelection;
