import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/mumbai-homes-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="mh-header border-bottom bg-white py-lg-2 p-0">
      <div className="container-fluid">

        <nav className="navbar navbar-light d-flex d-lg-none px-0 mobile-nav">

          <Link className="navbar-brand m-0" to="/">
            <img src={Logo} alt="Logo" className="mobile-logo" />
          </Link>

          <button
            className="navbar-toggler mobile-toggle collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </nav>

        <div className="mh-logo text-center d-none d-lg-block mb-3">
          <Link to="/">
            <img src={Logo} alt="Mumbai Homes Logo" className="desktop-logo" />
          </Link>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light justify-content-center p-0">

          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center menu-wrapper pt-1" 
            id="mainMenu"
          >
            <ul className="navbar-nav gap-2 text-uppercase small mt-3 mt-lg-0">
              <li className="nav-item"><Link to="/builder" className="nav-link">Builder</Link></li>
              <li className="nav-item"><Link to="/celebrity-homes" className="nav-link">Celebrity Homes</Link></li>
              <li className="nav-item"><Link to="/connectivity" className="nav-link">Connectivity</Link></li>
              <li className="nav-item"><Link to="/infrastructure" className="nav-link">Infrastructure</Link></li>
              <li className="nav-item"><Link to="/insurance" className="nav-link">Insurance</Link></li>
              <li className="nav-item"><Link to="/interiors" className="nav-link">Interiors</Link></li>
              <li className="nav-item"><Link to="/locality-insights" className="nav-link">Locality Insights</Link></li>
              <li className="nav-item"><Link to="/property-buying-guides" className="nav-link">Property Buying Guides</Link></li>
              <li className="nav-item"><Link to="/property-news" className="nav-link">Property News</Link></li>
              <li className="nav-item"><Link to="/vastu" className="nav-link">Vastu</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
}
