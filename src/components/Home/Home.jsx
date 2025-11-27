import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Banner from "../../assets/img/Desk Logo.gif";
import MannatImage from "../../assets/img/srk-mannat/srk-mannat-940x560-2.jpeg";
import NriImage from "../../assets/img/nri/real-estate-investment-india-940x560-1-768x458.png";
import LocalityImage from "../../assets/img/locality-insight/borivali-east-or-west-940x559-1-768x457.jpg";
import LocalityImage1 from "../../assets/img/locality-insight/cost-of-living-in-bangalore-940x560-1-768x458.jpg";
import InsuranceImage from "../../assets/img/insurance/ChatGPT-Image-Sep-18-2025-01_40_52-PM.png";
import PropertyImage from "../../assets/img/property-news/secproertynews-300x156.png";



export default function Home() {
    return (
        <div className="home-page">
            {/*======================== Rustomjee Gif ======================*/}
            <div className="banner-wrapper w-100">
                <img src={Banner} className="banner-img w-100" alt="Banner" />
            </div>
            {/*======================== Rustomjee Gif ======================*/}

            {/*======================== Section Start ======================*/}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="big-article card mb-4">
                            <img
                                src={MannatImage}
                                className="card-img-top big-article-img"
                                alt="Featured"
                            />
                            <div className="card-body">
                                <h3 className="big-article-title">
                                    Mannat, Shahrukh Khan House: Price, Inside Tour, Address
                                </h3>
                                <p className="big-article-date">November 15, 2025</p>
                                <p className="big-article-desc">
                                    Learn Everything About Mannat House: Shahrukh Khan, the King of Bollywood,
                                    in one of the most iconic homes in India. This mansion in Bandra is a landmark…
                                </p>
                                <button className="btn btn-outline-dark btn-sm">Read more →</button>
                            </div>
                        </div>
                        {/*======================== column 6 ======================*/}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="small-article card mb-4 position-relative">
                                    <span className="article-badge">NRI</span>
                                    <img
                                        src={NriImage}
                                        className="card-img-top big-article-img"
                                        alt="Featured"
                                    />
                                    <div className="card-body">
                                        <h6 className="small-article-title">
                                            Why Avoiding Indian Real Estate Could Be Your Biggest Financial Mistake?
                                        </h6>
                                        <p className="small-article-date">November 20, 2025</p>
                                        <p>For many Non-Resident Indians (NRIs) and international investors, the Indian real estate…</p>
                                        <button className="btn btn-outline-dark btn-sm">Read more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="small-article card mb-4 position-relative">
                                    <span className="article-badge">Locality Insights</span>
                                    <img
                                        src={LocalityImage}
                                        className="card-img-top big-article-img"
                                        alt="Featured"
                                    />
                                    <div className="card-body">
                                        <h6 className="small-article-title">
                                            Borivali East or West, Which Is the Best?
                                        </h6>
                                        <p className="small-article-date">November 15, 2025</p>
                                        <p>Mumbai is a rapidly growing metropolis, with many areas increasing faster than…</p>
                                        <button className="btn btn-outline-dark btn-sm">Read more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="small-article card mb-4 position-relative">
                                    <span className="article-badge">Locality Insights</span>
                                    <img
                                        src={LocalityImage1}
                                        className="card-img-top big-article-img"
                                        alt="Featured"
                                    />
                                    <div className="card-body">
                                        <h6 className="small-article-title">
                                            Cost of Living in Bangalore (2025-2026): Detailed list of monthly expenses
                                        </h6>
                                        <p className="small-article-date">November 20, 2025</p>
                                        <p>October 15, 2025 Bangalore, dubbed the ‘Silicon Valley of India’, is home…</p>
                                        <button className="btn btn-outline-dark btn-sm">Read more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="small-article card mb-4 position-relative">
                                    <span className="article-badge">Insurance </span>
                                    <img
                                        src={InsuranceImage}
                                        className="card-img-top big-article-img"
                                        alt="Featured"
                                    />
                                    <div className="card-body">
                                        <h6 className="small-article-title">
                                            The Average Home Insurance Cost in the U.S. for 2025
                                        </h6>
                                        <p className="small-article-date">November 15, 2025</p>
                                        <p>The average annual cost of homeowners insurance in the United States is…</p>
                                        <button className="btn btn-outline-dark btn-sm">Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*======================== column 6 end ======================*/}
                        {/*======================== column 4 start ======================*/}

                    </div>


                    {/*======================== Right Side Sticky Section Start  ======================*/}
                    <div className="col-lg-4">
                        <div className="sidebar sticky-top  p-3">
                            {/*------ Tabs -----*/}
                            <ul className="nav nav-tabs mb-3 custom-tabs">
                                <li className="nav-item tab_item">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#latest">Latest</button>
                                </li>
                                <li className="nav-item tab_item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#trending">Trending</button>
                                </li>
                                <li className="nav-item tab_item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#mostViewed">Most Viewed</button>
                                </li>
                            </ul>


                            {/*========================  ======================*/}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="latest">
                                    {/* 1 */}
                                    <Link to="/article/mannat" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Mannat, Shahrukh Khan House: Inside Tour</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 277 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* 2 */}
                                    <Link to="/article/mannat" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Mannat, Shahrukh Khan House: Inside Tour</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 277 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* 3 */}
                                    <Link to="/article/3bhk-plans" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Best 3 BHK House Plans</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 187 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* 4 */}
                                    <Link to="/article/mannat" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Mannat, Shahrukh Khan House: Inside Tour</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 277 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* 5 */}
                                    <Link to="/article/3bhk-plans" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Best 3 BHK House Plans</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 187 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>

                                {/* TRENDING TAB */}
                                <div className="tab-pane fade" id="trending">
                                    <Link to="/article/borivali" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Borivali East or West: Best?</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 117 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* MOST VIEWED TAB */}
                                <div className="tab-pane fade" id="mostViewed">
                                    <Link to="/article/bangalore-cost" className="article-link">
                                        <div className="article-box d-flex">
                                            <img src={MannatImage} className="card-img-top right_boxes" alt="Featured" />
                                            <div className="ms-3">
                                                <h6 className="article-title">Cost of Living in Bangalore 2025</h6>
                                                <p className="meta"><i className="bi bi-eye"></i> 102 views • Nov 15, 2025</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/*========================  ======================*/}

                        </div>
                    </div>
                    {/*========================  Right Side Sticky Section End   ======================*/}
                    <div className="letest-blogs-section mt-5">
                        <div className="container">
                            <h3 className="big-article-title py-2">Letest Blogs</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <Link to="/article/mannat" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={PropertyImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    What Does a Fed Rate Cut Mean for Mortgage Rates?
                                                </h6>
                                                <p className="small-article-date">November 15, 2025</p>
                                                <p>In response to rising labour market warning signs…</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/borivali" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={LocalityImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    Borivali East or West, Which Is the Best?
                                                </h6>
                                                <p className="small-article-date">November 15, 2025</p>
                                                <p>Mumbai is a rapidly growing metropolis, with many areas increasing faster than…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/bangalore-cost" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={LocalityImage1}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    Cost of Living in Bangalore (2025-2026): Detailed list of monthly expenses
                                                </h6>
                                                <p className="small-article-date">November 20, 2025</p>
                                                <p>October 15, 2025 Bangalore, dubbed the ‘Silicon Valley of India’, is home…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/insurance-cost" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={InsuranceImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    The Average Home Insurance Cost in the U.S. for 2025
                                                </h6>
                                                <p className="small-article-date">November 15, 2025</p>
                                                <p>The average annual cost of homeowners insurance in the United States is…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/nri-real-estate" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={NriImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    Why Avoiding Indian Real Estate Could Be Your Biggest Financial Mistake?
                                                </h6>
                                                <p className="small-article-date">November 20, 2025</p>
                                                <p>For many Non-Resident Indians (NRIs) and international investors, the Indian real estate…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/borivali" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={LocalityImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    Borivali East or West, Which Is the Best?
                                                </h6>
                                                <p className="small-article-date">November 15, 2025</p>
                                                <p>Mumbai is a rapidly growing metropolis, with many areas increasing faster than…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/bangalore-cost" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={LocalityImage1}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    Cost of Living in Bangalore (2025-2026): Detailed list of monthly expenses
                                                </h6>
                                                <p className="small-article-date">November 20, 2025</p>
                                                <p>October 15, 2025 Bangalore, dubbed the ‘Silicon Valley of India’, is home…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/article/insurance-cost" className="article-link">
                                        <div className="small-article card1 mb-4">
                                            <img
                                                src={InsuranceImage}
                                                className="card-img-top big-article-img"
                                                alt="Featured"
                                            />
                                            <div className="card-body">
                                                <h6 className="small-article-title">
                                                    The Average Home Insurance Cost in the U.S. for 2025
                                                </h6>
                                                <p className="small-article-date">November 15, 2025</p>
                                                <p>The average annual cost of homeowners insurance in the United States is…</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*======================== column 4 end ======================*/}
                </div>
            </div>
        </div>
    );
}
