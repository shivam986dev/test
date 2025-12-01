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

  function App() {
    useEffect(() => {
      initSmoothScroll && initSmoothScroll();
    }, []);

    return (
      <BrowserRouter basename="/test">
         <ScrollToTopOnRouteChange />
      <ScrollTopButton />
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


        </Routes>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    );
  }

  export default App;
