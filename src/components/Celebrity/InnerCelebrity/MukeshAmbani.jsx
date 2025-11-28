import React from "react";
// import "./inner_builder1.css";
import CelebrityImage from "../../../assets/img/celebrity-homes/antilia.png";
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
                Mukesh Ambani’s Antilia: Inside Asia’s most opulent residence, at $2 billion.
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerBuilder1">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={CelebrityImage} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>
                                Mukesh Ambani’s legendary and magnificent 400,000-square-foot residence is located on Altamount Road,
                                one of Mumbai’s and the world’s most expensive locations.
                            </p>

                            <p>
                                Mukesh Ambani, Chairman and Managing Director of Reliance Industries, lives in a one-of-a-kind mansion
                                in Mumbai. Antilia is believed to be the world’s most expensive private mansion. The high-end,
                                27-story home on South Mumbai’s Altamount Road is said to cost Rs 15,000 crore (or about $2 billion USD).
                                Antilia, inspired by a fabled island in the Atlantic Ocean, is 570 feet tall and offers a breathtaking
                                panoramic perspective of the city. Here’s why Mukesh Ambani’s Antilia mansion has become a symbol of Indian
                                and global culture.
                            </p>

                            <h3><strong>Luxurious Locality</strong></h3>

                            <div className="post-image-container image-fit-contain">
                                <img
                                    className="show-on-desktop img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXcNzqaO9XMN57w9Bu7DXxH17sUUijARgcZ5ETBar1ao5L88R9xN_6LbmIxgB83wQjoQTwbF_9QW1rI4_t6mgZV3iXwi6TyFEr0Shr_XjERWa6qfWTVO0vDE584Idf_ZWQkeRt5mSg-1.png"
                                    alt="Luxurious Locality"
                                />
                               
                            </div>

                            <p>
                                The 400,000-square-foot structure is located on Altamount Road in South Mumbai, which is one of the
                                world’s most expensive addresses. According to property trends, the price per square foot of any
                                real estate on Altamount Road currently ranges between Rs 80,000 and Rs 1 lac.
                            </p>

                            <h3><strong>Massive In Scale</strong></h3>

                            <div className="post-image-container image-fit-contain">
                                <img
                                    className="show-on-desktop img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXd2CFcTXGjwCxkNvCAYpcdrUK3RVKHjnHkYaH-xHKia4qqbkJ4XEpVpz1BuNuckOLYs-kHG9LMPdMBk-08qCEoE1G-UlEVZwlaO8Hj7iArJZi-zr7DdZdJGanGQgAJvhDb9kNkZFQ-1.png"
                                    alt="Massive Scale"
                                />
                            
                            </div>

                            <p>
                                Perkins & Will, a Chicago-based architecture firm, designed Mukesh Ambani’s home…
                                Antilia can also withstand an earthquake with a magnitude of 8.
                            </p>

                            <h3><strong>Lavish Home Decor</strong></h3>

                            <div className="post-image-container image-fit-contain">
                                <img
                                    className="show-on-desktop img-fluid"
                                    src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXcCrgYBbnL8eUAK7Emf4JMdh7ldZv03BXPfCfGo9QgZYT27vUCbb2HkG97cfKyF1MMm7jiFsZL8J2XUtyioE8GIyYwJRPdSDHiDvvvuewegLtFS71RZciBQjyKnXbpiGDjkIoN-7Q-1.png"
                                    alt="Home Decor"
                                />
                               
                            </div>

                            <p>
                                Antilia’s architectural design is based on the lotus and sun. The top six floors are private residential
                                areas. It contains a temple, guest suites, hanging garden, helipads, salon, ice cream parlour, and a
                                50-seat private cinema.
                            </p>

                            <h3><strong>A Six-Storeyed Garage</strong></h3>

                            <p>
                                Mukesh Ambani has a passion for luxury cars… The garage can accommodate 168 automobiles and includes
                                a full-service car workshop.
                            </p>

                            <h3><strong>A Snowroom To Beat The Heat</strong></h3>

                            <p>
                                The Mumbai summer can be harsh, but Antilia includes a snow room that releases artificial snow to keep
                                the family cool during hot days.
                            </p>
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
