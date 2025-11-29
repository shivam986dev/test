import React, { useEffect } from "react";
import { initSmoothScroll } from "./smoothScroll";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import "@fontsource/oswald";  

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
// inner Connectivity links
import InnerInfrastructure from "./components/Infrastructure/InnerInfrastructure/InnerInfrastructure";


function App() {
  useEffect(() => {
    initSmoothScroll && initSmoothScroll();
  }, []);

  return (
    <BrowserRouter basename="/test">
      <ScrollToTop />
      <Header />

      <Routes>

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


        {/*===================== INTERIOR  ============================*/}
        <Route path="/interiors" element={<Interiors />} />
        {/*-----Interiors inner----*/}


        {/*===================== lOCALITY INSIGHT  ============================*/}
        <Route path="/locality-insight" element={<LocalityInsight />} />
        {/*-----Locality Insight inner----*/}


        {/*===================== PROPERTY BUYING GUIDES  ============================*/}
        <Route path="/property-buying-guides" element={<PropertyBuyingGuides />} />
        {/*-----Property Buying Guides inner----*/}


        {/*===================== PROPERTY NEWS  ============================*/}
        <Route path="/property-news" element={<PropertyNews />} />
        {/*-----Property News inner----*/}


        {/*===================== VASTU  ============================*/}
        <Route path="/vastu" element={<Vastu />} />
        {/*-----Vastu inner----*/}

        {/*====================== INNER PAGE LINKS ===================*/}



      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
