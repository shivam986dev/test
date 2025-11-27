import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Srk from "./components/Srk/Srk"; 
import Celebrity from "./components/Celebrity/Celebrity";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/test">  
    <ScrollToTop /> 
      <Header />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/*  CELEBRITY HOMES LIST PAGE */}
        <Route path="/celebrity-homes" element={<Celebrity />} />

        {/* INDIVIDUAL CELEBRITY PAGE */}
        <Route path="/shahrukh-khan" element={<Srk />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
