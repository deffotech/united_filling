import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ChangePassword from "@/pages/ChangePassword";
import TwoFactorAuth from "@/pages/TwoFactorAuth";
import BookConsultation from "@/pages/BookConsultation";
import PrivacySettings from "@/pages/PrivacySettings";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Partner from "./pages/Partner";
import Checkout from "./pages/Checkout";

// Import service pages
import BusinessRegistration from "./pages/BusinessRegistration";
import Proprietorship from "./pages/Proprietorship";
import Partnership from "./pages/Partnership";
import OnePersonCompany from "./pages/OnePersonCompany";
import LLP from "./pages/LLP";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import Section8Company from "./pages/Section8Company";
import TrustRegistration from "./pages/TrustRegistration";
import ProducerCompany from "./pages/ProducerCompany";
import NidhiCompany from "./pages/NidhiCompany";
import IndianSubsidiary from "./pages/IndianSubsidiary";
import StartupIndia from "./pages/StartupIndia";
import TradeLicense from "./pages/TradeLicense";
import FSSAIRegistration from "./pages/FSSAIRegistration";
import FSSAiLicense from "./pages/FSSAiLicense";
import HalalCertification from "./pages/HalalCertification";
import IcegateRegistration from "./pages/IcegateRegistration";
import ImportExportCode from "./pages/ImportExportCode";
import Society from "./pages/Society";
import SetupBusinessInUAE from "./pages/SetupBusinessInUAE";
import SetupBusinessInUSA from "./pages/SetupBusinessInUSA";
import SetupBusinessInSingapore from "./pages/SetupBusinessInSingapore";
import SetupBusinessInUK from "./pages/SetupBusinessInUK";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import PatentRegistration from "./pages/PatentRegistration";
import GstRegistration from "./pages/GstRegistration";
import GstReturnFiling from "./pages/GstReturnFiling";
import IncomeTaxEFilingNew from "./pages/IncomeTaxEFilingNew";
import DigitalSignature from "./pages/DigitalSignature";
import PFRegistration from "./pages/PFRegistration";
import ESIRegistration from "./pages/ESIRegistration";
import DematOfShares from "./pages/DematOfShares";
import WindingUpLLP from "./pages/WindingUpLLP";
import WindingUpCompany from "./pages/WindingUpCompany";
import UdyamRegistration from "./pages/UdyamRegistration";
import FCRARegistration from "./pages/FCRARegistration";
import CompanyCompliance from "./pages/CompanyCompliance";
import LlpCompliance from "./pages/LlpCompliance";
import TANRegistration from "./pages/TANRegistration";
import TDSReturnFiling from "./pages/TDSReturnFiling";
// import SetupBusinessUAE from "./pages/SetupBusinessUAE";
import Consultation from "./pages/Consultation";
import TalkToExpert from "./pages/TalkToExpert";
import AboutUs from "./pages/AboutUs";
import Guide from "./pages/Guide";
import LegalEntityIdentifierCode from "./pages/LegalEntityIdentifierCode";
import ISORegistration from "./pages/ISORegistration";
import ProfessionalTaxRegistration from "./pages/ProfessionalTaxRegistration";
import RCMCRegistration from "./pages/RCMCRegistration";
import ReraRegistrationForAgents from "./pages/ReraRegistrationForAgents";
import Twelve_A_80G_Registration from "./pages/12Aand80GRegistration";
import Twelve_A_Registration from "./pages/12ARegistration";
import EightyG_Registration from "./pages/EightyGRegistration";
import ApedaRegistration from "./pages/ApedaRegistration";
import BarcodeRegistration from "./pages/BarcodeRegistration";
import BisRegistration from "./pages/BisRegistration";
import CertificateOfIncumbency from "./pages/CertificateOfIncumbency";
import DarpanRegistration from "./pages/DarpanRegistration";
import ShopAndEstablishmentAct from "./pages/ShopAndEstablishmentAct";
import DrugLicense from "./pages/DrugLicense";
import FireLicense from "./pages/FireLicense";
import GstAnnualReturnFilingGstr9 from "./pages/GstAnnualReturnFilingGstr9";
import GstLutForm from "./pages/GstLutForm";
import GstNotice from "./pages/GstNotice";
import GstRegistrationForForeigners from "./pages/GstRegistrationForForeigners";
import GstRegistrationAmendment from "./pages/GstRegistrationAmendment";
import GstRevocation from "./pages/GstRevocation";
import Gstr10ReturnFiling from "./pages/Gstr10ReturnFiling";
import ITR1ReturnFiling from "./pages/ITR1ReturnFiling";
import ITR2ReturnFiling from "./pages/ITR2ReturnFiling";
import ITR3ReturnFiling from "./pages/ITR3ReturnFiling";
import ITR4ReturnFiling from "./pages/ITR4ReturnFiling";
import ITR5ReturnFiling from "./pages/ITR5ReturnFiling";
import ITR6ReturnFiling from "./pages/ITR6ReturnFiling";
import ITR7ReturnFiling from "./pages/ITR7ReturnFiling";
import Fifteen_CA_15CB_Filing from "./pages/15CA15CBFiling";
import IncomeTaxNotice from "./pages/IncomeTaxNotice";
import NameChangeCompany from "./pages/NameChangeCompany";
import RegisteredOfficeChangeCompany from "./pages/RegisteredOfficeChangeCompany";
import DINEkycFiling from "./pages/DINEkycFiling";
import DINReactivation from "./pages/DINReactivation";
import DirectorChange from "./pages/DirectorChange";
import RemoveDirector from "./pages/RemoveDirector";
import ADT1Filing from "./pages/ADT1Filing";
import DPT3Filing from "./pages/DPT3Filing";
import LLPForm11Filing from "./pages/LLPForm11Filing";
import DormantStatusFiling from "./pages/DormantStatusFiling";
import MOAAmendment from "./pages/MOAAmendment";
import AOAAmendment from "./pages/AOAAmendment";
import AuthorizedCapitalIncrease from "./pages/AuthorizedCapitalIncrease";
import ShareTransfer from "./pages/ShareTransfer";
import FDIFilingWithRBI from "./pages/FDIFilingWithRBI";
import FLAReturnFiling from "./pages/FLAReturnFiling";
import FSSAIRenewal from "./pages/FSSAIRenewal";
import FSSAIReturnFiling from "./pages/FSSAIReturnFiling";
import PFReturnFiling from "./pages/PFReturnFiling";
import ESIReturnFiling from "./pages/ESIReturnFiling";
import ProfessionalTaxReturnFiling from "./pages/ProfessionalTaxReturnFiling";
import PartnershipCompliance from "./pages/PartnershipCompliance";
import ProprietorshipCompliance from "./pages/ProprietorshipCompliance";
import Bookkeeping from "./pages/Bookkeeping";
import OpcCompliance from "./pages/OpcCompliance";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WishlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Layout showSidebar={false}><Index /></Layout>} />
              <Route path="/login" element={<Layout showSidebar={false}><Login /></Layout>} />
              <Route path="/profile" element={<Layout><Profile /></Layout>} />
              <Route path="/services" element={<Layout><Services /></Layout>} />
              <Route path="/partner" element={<Layout><Partner /></Layout>} />
              <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
              <Route path="/change-password" element={<Layout><ChangePassword /></Layout>} />
              <Route path="/two-factor-auth" element={<Layout><TwoFactorAuth /></Layout>} />
              <Route path="/book-consultation" element={<Layout><BookConsultation /></Layout>} />
              <Route path="/privacy-settings" element={<Layout><PrivacySettings /></Layout>} />
              <Route path="/business-registration" element={<Layout><BusinessRegistration /></Layout>} />
              
              {/* Business Registration Routes */}
              <Route path="/proprietorship" element={<Layout><Proprietorship /></Layout>} />
              <Route path="/partnership" element={<Layout><Partnership /></Layout>} />
              <Route path="/one-person-company" element={<Layout><OnePersonCompany /></Layout>} />
              <Route path="/limited-liability-partnership" element={<Layout><LLP /></Layout>} />
              <Route path="/private-limited-company" element={<Layout><PrivateLimitedCompany /></Layout>} />
              <Route path="/public-limited-company" element={<Layout><PublicLimitedCompany /></Layout>} />
              <Route path="/section-8-company" element={<Layout><Section8Company /></Layout>} />
              <Route path="/trust-registration" element={<Layout><TrustRegistration /></Layout>} />
              <Route path="/producer-company" element={<Layout><ProducerCompany /></Layout>} />
              <Route path="/nidhi-company" element={<Layout><NidhiCompany /></Layout>} />
              <Route path="/indian-subsidiary" element={<Layout><IndianSubsidiary /></Layout>} />
              <Route path="/startup-india" element={<Layout><StartupIndia /></Layout>} />
              <Route path="/trade-license" element={<Layout><TradeLicense /></Layout>} />
              <Route path="/fssai-registration" element={<Layout><FSSAIRegistration /></Layout>} />
              <Route path="/fssai-license" element={<Layout><FSSAiLicense /></Layout>} />
              <Route path="/halal-certification" element={<Layout><HalalCertification /></Layout>} />
              <Route path="/icegate-registration" element={<Layout><IcegateRegistration /></Layout>} />
              <Route path="/import-export-code" element={<Layout><ImportExportCode /></Layout>} />
              <Route path="/society" element={<Layout><Society /></Layout>} />
              <Route path="/society-registration" element={<Layout><Society /></Layout>} />
              <Route path="/setup-business-uae" element={<Layout><SetupBusinessInUAE /></Layout>} />
              <Route path="/setup-business-usa" element={<Layout><SetupBusinessInUSA /></Layout>} />
              <Route path="/setup-business-in-usa" element={<Layout><SetupBusinessInUSA /></Layout>} />
              <Route path="/setup-business-in-singapore" element={<Layout><SetupBusinessInSingapore /></Layout>} />
              <Route path="/setup-business-in-uk" element={<Layout><SetupBusinessInUK /></Layout>} />
              <Route path="/setup-business-usa" element={<Layout><SetupBusinessInUSA /></Layout>} />
              
              {/* Trademark Routes */}
              <Route path="/trademark-registration" element={<Layout><TrademarkRegistration /></Layout>} />
              <Route path="/copyright-registration" element={<Layout><CopyrightRegistration /></Layout>} />
              <Route path="/patent-registration" element={<Layout><PatentRegistration /></Layout>} />
              
              {/* GST Routes */}
              <Route path="/gst-registration" element={<Layout><GstRegistration /></Layout>} />
              <Route path="/gst-return-filing" element={<Layout><GstReturnFiling /></Layout>} />
              <Route path="/gst-annual-return-filing-gstr9" element={<Layout><GstAnnualReturnFilingGstr9 /></Layout>} />
              <Route path="/gst-lut-form" element={<Layout><GstLutForm /></Layout>} />
              <Route path="/gst-notice" element={<Layout><GstNotice /></Layout>} />
              <Route path="/gst-registration-for-foreigners" element={<Layout><GstRegistrationForForeigners /></Layout>} />
              <Route path="/gst-registration-amendment" element={<Layout><GstRegistrationAmendment /></Layout>} />
              <Route path="/gst-revocation" element={<Layout><GstRevocation /></Layout>} />
              <Route path="/gst-gstr-10" element={<Layout><Gstr10ReturnFiling /></Layout>} />
              
              {/* Tax Routes */}
              <Route path="/income-tax-e-filing-new" element={<Layout><IncomeTaxEFilingNew /></Layout>} />
              <Route path="/itr-1-return-filing" element={<Layout><ITR1ReturnFiling /></Layout>} />
              <Route path="/itr-2-return-filing" element={<Layout><ITR2ReturnFiling /></Layout>} />
              <Route path="/itr-3-return-filing" element={<Layout><ITR3ReturnFiling /></Layout>} />
              <Route path="/itr-4-return-filing" element={<Layout><ITR4ReturnFiling /></Layout>} />
              <Route path="/itr-5-return-filing" element={<Layout><ITR5ReturnFiling /></Layout>} />
              <Route path="/itr-6-return-filing" element={<Layout><ITR6ReturnFiling /></Layout>} />
              <Route path="/itr-7-return-filing" element={<Layout><ITR7ReturnFiling /></Layout>} />
              <Route path="/15ca-15cb-filing" element={<Layout><Fifteen_CA_15CB_Filing /></Layout>} />
              <Route path="/tan-registration" element={<Layout><TANRegistration /></Layout>} />
              <Route path="/tds-return-filing" element={<Layout><TDSReturnFiling /></Layout>} />
              <Route path="/income-tax-notice" element={<Layout><IncomeTaxNotice /></Layout>} />
              
              {/* Other service routes continue... */}
              <Route path="/digital-signature" element={<Layout><DigitalSignature /></Layout>} />
              <Route path="/pf-registration" element={<Layout><PFRegistration /></Layout>} />
              <Route path="/esi-registration" element={<Layout><ESIRegistration /></Layout>} />
              <Route path="/demat-of-shares" element={<Layout><DematOfShares /></Layout>} />
              <Route path="/winding-up-llp" element={<Layout><WindingUpLLP /></Layout>} />
              <Route path="/winding-up-company" element={<Layout><WindingUpCompany /></Layout>} />
              <Route path="/udyam-registration" element={<Layout><UdyamRegistration /></Layout>} />
              <Route path="/fcra-registration" element={<Layout><FCRARegistration /></Layout>} />
              <Route path="/company-compliance" element={<Layout><CompanyCompliance /></Layout>} />
              <Route path="/llp-compliance" element={<Layout><LlpCompliance /></Layout>} />
              <Route path="/consultation" element={<Layout><Consultation /></Layout>} />
              <Route path="/talk-to-expert" element={<Layout><TalkToExpert /></Layout>} />
              <Route path="/about-us" element={<Layout showSidebar={false}><AboutUs /></Layout>} />
              <Route path="/guide" element={<Layout><Guide /></Layout>} />
              
              {/* Additional routes */}
              <Route path="/legal-entity-identifier-code" element={<Layout><LegalEntityIdentifierCode /></Layout>} />
              <Route path="/iso-registration" element={<Layout><ISORegistration /></Layout>} />
              <Route path="/professional-tax-registration" element={<Layout><ProfessionalTaxRegistration /></Layout>} />
              <Route path="/rcmc-registration" element={<Layout><RCMCRegistration /></Layout>} />
              <Route path="/rera-registration-for-agents" element={<Layout><ReraRegistrationForAgents /></Layout>} />
              <Route path="/12a-80g-registration" element={<Layout><Twelve_A_80G_Registration /></Layout>} />
              <Route path="/12a-registration" element={<Layout><Twelve_A_Registration /></Layout>} />
              <Route path="/80g-registration" element={<Layout><EightyG_Registration /></Layout>} />
              <Route path="/apeda-registration" element={<Layout><ApedaRegistration /></Layout>} />
              <Route path="/barcode-registration" element={<Layout><BarcodeRegistration /></Layout>} />
              <Route path="/bis-registration" element={<Layout><BisRegistration /></Layout>} />
              <Route path="/certificate-of-incumbency" element={<Layout><CertificateOfIncumbency /></Layout>} />
              <Route path="/darpan-registration" element={<Layout><DarpanRegistration /></Layout>} />
              <Route path="/shop-and-establishment-act" element={<Layout><ShopAndEstablishmentAct /></Layout>} />
              <Route path="/drug-license" element={<Layout><DrugLicense /></Layout>} />
              <Route path="/fire-license" element={<Layout><FireLicense /></Layout>} />
              
              {/* MCA Routes */}
              <Route path="/name-change-company" element={<Layout><NameChangeCompany /></Layout>} />
              <Route path="/registered-office-change-company" element={<Layout><RegisteredOfficeChangeCompany /></Layout>} />
              <Route path="/din-ekyc-filing" element={<Layout><DINEkycFiling /></Layout>} />
              <Route path="/din-reactivation" element={<Layout><DINReactivation /></Layout>} />
              <Route path="/director-change" element={<Layout><DirectorChange /></Layout>} />
              <Route path="/remove-director" element={<Layout><RemoveDirector /></Layout>} />
              <Route path="/adt-1-filing" element={<Layout><ADT1Filing /></Layout>} />
              <Route path="/dpt3-filing" element={<Layout><DPT3Filing /></Layout>} />
              <Route path="/llp-form11-filing" element={<Layout><LLPForm11Filing /></Layout>} />
              <Route path="/dormant-status-filing" element={<Layout><DormantStatusFiling /></Layout>} />
              <Route path="/moa-amendment" element={<Layout><MOAAmendment /></Layout>} />
              <Route path="/aoa-amendment" element={<Layout><AOAAmendment /></Layout>} />
              <Route path="/authorized-capital-increase" element={<Layout><AuthorizedCapitalIncrease /></Layout>} />
              <Route path="/share-transfer" element={<Layout><ShareTransfer /></Layout>} />
              
              {/* Compliance Routes */}
              <Route path="/fdi-filing-rbi" element={<Layout><FDIFilingWithRBI /></Layout>} />
              <Route path="/fla-return-filing" element={<Layout><FLAReturnFiling /></Layout>} />
              <Route path="/fssai-renewal" element={<Layout><FSSAIRenewal /></Layout>} />
              <Route path="/fssai-return-filing" element={<Layout><FSSAIReturnFiling /></Layout>} />
              <Route path="/pf-return-filing" element={<Layout><PFReturnFiling /></Layout>} />
              <Route path="/esi-return-filing" element={<Layout><ESIReturnFiling /></Layout>} />
              <Route path="/professional-tax-return-filing" element={<Layout><ProfessionalTaxReturnFiling /></Layout>} />
              <Route path="/partnership-compliance" element={<Layout><PartnershipCompliance /></Layout>} />
              <Route path="/proprietorship-compliance" element={<Layout><ProprietorshipCompliance /></Layout>} />
              <Route path="/bookkeeping" element={<Layout><Bookkeeping /></Layout>} />
              <Route path="/opc-compliance" element={<Layout><OpcCompliance /></Layout>} />
            </Routes>
          </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
