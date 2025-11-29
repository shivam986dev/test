import React from "react";
// import "./inner_builder1.css";
import InsuranceImage from "../../../assets/img/insurance/ChatGPT-Image-Sep-18-2025-01_40_52-PM.png";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function InnerBuilder1() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="container py-4 inner_builder1-page p-lg-0">

            {/* Title */}
            <h1 className="inner_page-title">
                The Average Home Insurance Cost in the U.S. for 2025
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={InsuranceImage} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="col-lg-4 pe-lg-0">

                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="adds Rustomjee" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
