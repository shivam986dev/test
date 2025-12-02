import React, { useEffect } from "react";
import { initSmoothScroll } from "./smoothScroll";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollToTop/ScrollTopButton";
import ScrollToTopOnRouteChange from "./components/ScrollToTop/ScrollToTopOnRouteChange";
import ScrollTopButton from "./components/ScrollToTop/ScrollTopButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import "@fontsource/oswald";  
import ForceReload from "./components/ForceReload";
import Home from "./components/Home/Home";
import Celebrity from "./components/Celebrity/Celebrity";
import Builder from "./components/Builder/Builder";
import Connectivity from "./components/Connectivity/Connectivity";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Insurance from "./components/Insurance/Insurance";
import Interiors from "./components/Interiors/Interiors";
import LocalityInsight from "./components/LocalityInsight/LocalityInsight";
import PropertyBuyingGuides from "./components/PropertyBuyingGuides/PropertyBuyingGuides";
import PropertyNews from "./components/PropertyNews/PropertyNews";
import Vastu from "./components/Vastu/Vastu";
import Nri from "./components/Nri/Nri";
// inner builder links
import InnerBuilder1 from "./components/Builder/InnerBuilder/InnerBuilder1";
import InnerBuilder2 from "./components/Builder/InnerBuilder/InnerBuilder2";
import InnerBuilder3 from "./components/Builder/InnerBuilder/InnerBuilder3";
// inner Celebrity links
import MukeshAmbani from "./components/Celebrity/InnerCelebrity/MukeshAmbani";
import ViratKohli from "./components/Celebrity/InnerCelebrity/ViratKohli";
import ShahrukhKhan from "./components/Celebrity/InnerCelebrity/ShahrukhKhan";
import VijayVerma from "./components/Celebrity/InnerCelebrity/VijayVerma";
// inner Connectivity links
import InnerConnectivity1 from "./components/Connectivity/InnerConnectivity/InnerConnectivity1";
import InnerConnectivity2 from "./components/Connectivity/InnerConnectivity/InnerConnectivity2";
// inner Infrastructure links
import InnerInfrastructure from "./components/Infrastructure/InnerInfrastructure/InnerInfrastructure";
// inner Insurance links
import InnerInsurance from "./components/Insurance/InnerInsurance/InnerInsurance";
// inner Interior links
import InnerInterior1 from "./components/Interiors/InnerInterior/InnerInterior1";
import InnerInterior2 from "./components/Interiors/InnerInterior/InnerInterior2";
import InnerInterior3 from "./components/Interiors/InnerInterior/InnerInterior3";
// inner Locality Insight links
import InnerLocalityInsight1 from "./components/LocalityInsight/InnerLocalityInsight/InnerLocalityInsight1";
import InnerLocalityInsight2 from "./components/LocalityInsight/InnerLocalityInsight/InnerLocalityInsight2";
// inner Property Buying Guides links
import InnerPropertyBuyingGuides from "./components/PropertyBuyingGuides/InnerPropertyBuyingGuides/InnerPropertyBuyingGuides";
// inner Property News links
import InnerPropertyNews1 from "./components/PropertyNews/InnerPropertyNews/InnerPropertyNews1";
import InnerPropertyNews2 from "./components/PropertyNews/InnerPropertyNews/InnerPropertyNews2";
// inner Vastu links
import InnerVastu1 from "./components/Vastu/InnerVastu/InnerVastu1";
// Stump duty calculator
import DutyCalculator from "./components/DutyCalculator/DutyCalculator";
//Area calculator
import AreaCalculator from "./components/AreaCalculator/AreaCalculator";
// Inner Area calculator
import AcerToBigha from "./components/AreaCalculator/InnerAreaCalculator/AcerToBigha";
import BighaToAcer from "./components/AreaCalculator/InnerAreaCalculator/BighaToAcer";

import BillionToCrore from "./components/AreaCalculator/InnerAreaCalculator/BillionToCrore";
import MillionToRupees from "./components/AreaCalculator/InnerAreaCalculator/MillionToRupees";

import CentimetersToInches from "./components/AreaCalculator/InnerAreaCalculator/CentimetersToInches";
import CentimeterToFeet from "./components/AreaCalculator/InnerAreaCalculator/CentimeterToFeet";
import FeetToCm from "./components/AreaCalculator/InnerAreaCalculator/FeetToCm";
import FeetToInches from "./components/AreaCalculator/InnerAreaCalculator/FeetToInches";
import FeetToMeter from "./components/AreaCalculator/InnerAreaCalculator/FeetToMeter";
import InchesToCm from "./components/AreaCalculator/InnerAreaCalculator/InchesToCm";
import InchesToFeet from "./components/AreaCalculator/InnerAreaCalculator/InchesToFeet";
import InchesToMillimeters from "./components/AreaCalculator/InnerAreaCalculator/InchesToMillimeters";
import MillimetersToFeet from "./components/AreaCalculator/InnerAreaCalculator/MillimetersToFeet";
import MillimetersToInches from "./components/AreaCalculator/InnerAreaCalculator/MillimetersToInches";
import MeterToCentimeter from "./components/AreaCalculator/InnerAreaCalculator/MeterToCentimeter";

import CentToSquare from "./components/AreaCalculator/InnerAreaCalculator/CentToSquare";
import DecimalToSquare from "./components/AreaCalculator/InnerAreaCalculator/DecimalToSquare";
import KilogramsToPound from "./components/AreaCalculator/InnerAreaCalculator/KilogramsToPound";
import SquareFeetToGaj from "./components/AreaCalculator/InnerAreaCalculator/SquareFeetToGaj";



function App() {
  useEffect(() => {
    initSmoothScroll && initSmoothScroll();
  }, []);

  return (
    <BrowserRouter basename="/test">
      <ScrollToTopOnRouteChange />
      <ForceReload />
      <ScrollTopButton />
      <Header />

      <Routes>

        {/* refresh page click on new page  */}
        <Route path="/ForceReload" element={<ForceReload />} />

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/*===================== BUILDER  ============================*/}
        <Route path="/builder" element={<Builder />} />

        {/*---- BUILDER inner----*/}

        <Route path="/inner-builder1" element={<InnerBuilder1 />} />

        <Route path="/inner-builder2" element={<InnerBuilder2 />} />

        <Route path="/inner-builder3" element={<InnerBuilder3 />} />


        {/*===================== CELEBRITY  ============================*/}
        <Route path="/celebrity-homes" element={<Celebrity />} />

        {/*---- Celebrity inner----*/}

        <Route path="/mukeshambani" element={<MukeshAmbani />} />

        <Route path="/viratkohli" element={<ViratKohli />} />

        <Route path="/shahrukh-khan" element={<ShahrukhKhan />} />

        <Route path="/vijayverma" element={<VijayVerma />} />


        {/*===================== CONNECTIVITY  ============================*/}
        <Route path="/connectivity" element={<Connectivity />} />
        {/*-----Connectivity inner----*/}

        <Route path="/innerconnectivity1" element={<InnerConnectivity1 />} />

        <Route path="/innerconnectivity2" element={<InnerConnectivity2 />} />



        {/*===================== INFRASTRUCTURE  ============================*/}
        <Route path="/infrastructure" element={<Infrastructure />} />
        {/*-----Infrastructure inner----*/}

        <Route path="/innerinfrastructure" element={<InnerInfrastructure />} />


        {/*===================== INSURANCE  ============================*/}
        <Route path="/insurance" element={<Insurance />} />
        {/*-----Insurance inner----*/}
        <Route path="/innerinsurance" element={<InnerInsurance />} />

        {/*===================== INTERIOR  ============================*/}
        <Route path="/interiors" element={<Interiors />} />
        {/*-----Interiors inner----*/}
        <Route path="/innerinterior1" element={<InnerInterior1 />} />
        <Route path="/innerinterior2" element={<InnerInterior2 />} />
        <Route path="/innerinterior3" element={<InnerInterior3 />} />


        {/*===================== lOCALITY INSIGHT  ============================*/}
        <Route path="/locality-insight" element={<LocalityInsight />} />
        {/*-----Locality Insight inner----*/}
        <Route path="/innerlocalityinsight1" element={<InnerLocalityInsight1 />} />
        <Route path="/innerlocalityinsight2" element={<InnerLocalityInsight2 />} />

        {/*===================== PROPERTY BUYING GUIDES  ============================*/}
        <Route path="/property-buying-guides" element={<PropertyBuyingGuides />} />
        {/*-----Property Buying Guides inner----*/}
        <Route path="/innerpropertybuyingguides" element={<InnerPropertyBuyingGuides />} />

        {/*===================== PROPERTY NEWS  ============================*/}
        <Route path="/property-news" element={<PropertyNews />} />
        {/*-----Property News inner----*/}
        <Route path="/innerpropertynews1" element={<InnerPropertyNews1 />} />
        <Route path="/innerpropertynews2" element={<InnerPropertyNews2 />} />

        {/*===================== VASTU  ============================*/}
        <Route path="/vastu" element={<Vastu />} />
        {/*-----Vastu inner----*/}
        <Route path="/innervastu1" element={<InnerVastu1 />} />

        {/*====================== INRI ===================*/}
        <Route path="/nri" element={<Nri />} />

        {/*====================== DUTY CALCULATOR ===================*/}
        <Route path="/dutycalculator" element={<DutyCalculator />} />

        {/*====================== AREA CALCULATOR ===================*/}
        <Route path="/areacalculator" element={<AreaCalculator />} />
        {/*-----Area Calculator inner----*/}
        <Route path="/area/acre-to-bigha-converter" element={<AcerToBigha />} />
        <Route path="/area/bigha-to-acre-converter" element={<BighaToAcer />} />
        <Route path="/area/billion-to-crore-converter" element={<BillionToCrore />} />
        <Route path="/area/million-to-rupees-converter" element={<MillionToRupees />} />
        <Route path="/area/centimeters-to-inches-converter" element={<CentimetersToInches />} />
        <Route path="/area/centimeter-to-feet-converter" element={<CentimeterToFeet />} />
        <Route path="/area/feet-to-cm-converter" element={<FeetToCm />} />
        <Route path="/area/feet-to-inches-converter" element={<FeetToInches />} />
        <Route path="/area/feet-to-meter-converter" element={<FeetToMeter />} />
        <Route path="/area/inches-to-cm-converter" element={<InchesToCm />} />
        <Route path="/area/inches-to-feet-converter" element={<InchesToFeet />} />
        <Route path="/area/inches-to-millimeters-converter" element={<InchesToMillimeters />} />
        <Route path="/area/millimeters-to-feet-converter" element={<MillimetersToFeet />} />
        <Route path="/area/millimeters-to-inches-converter" element={<MillimetersToInches />} />
        <Route path="/area/meter-to-centimeter-converter" element={<MeterToCentimeter />} />
        <Route path="/area/cent-to-square-feet-converter" element={<CentToSquare />} />
        <Route path="/area/decimal-to-square-feet-converter" element={<DecimalToSquare />} />
        <Route path="/area/kilograms-to-pound-converter" element={<KilogramsToPound />} />
        <Route path="/area/square-feet-to-gaj-converter" element={<SquareFeetToGaj />} />


      </Routes>
      <ScrollTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
