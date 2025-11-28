import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./components/Home/Home";
import Srk from "./components/Srk/Srk";
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


function App() {
  return (
    <BrowserRouter basename="/test">
      <ScrollToTop />
      <Header />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/*  BUILDER LIST PAGE */}
        <Route path="/builder" element={<Builder />} />


        {/*  CELEBRITY HOMES LIST PAGE */}
        <Route path="/celebrity-homes" element={<Celebrity />} />

        {/*  Connectivity LIST PAGE */}
        <Route path="/connectivity" element={<Connectivity />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/infrastructure" element={<Infrastructure />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/insurance" element={<Insurance />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/interiors" element={<Interiors />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/locality-insight" element={<LocalityInsight />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/property-buying-guides" element={<PropertyBuyingGuides />} />

        {/*  Infrastructure LIST PAGE */}
        <Route path="/property-news" element={<PropertyNews />} />

         {/*  Infrastructure LIST PAGE */}
        <Route path="/vastu" element={<Vastu />} />

        {/* INDIVIDUAL CELEBRITY PAGE */}
        <Route path="/shahrukh-khan" element={<Srk />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
