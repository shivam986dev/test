import React from "react";
import "./Srk.css";
import MannatImage from "../../assets/img/srk-mannat/srk-mannat-940x560-2.jpeg";
import LogoaddImage from "../../assets/img/Logo-animation.gif";

export default function Srk() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="container py-4 srk-page p-lg-0">



            {/* Title */}
            <h1 className="srk-title">
                Mannat, Shahrukh Khan House: Price, Inside Tour, Address
            </h1>


            {/* Main Content */}
            <div className="row">

                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    {/* Banner Image */}
                    <div className="srk-banner mb-4">
                        <img src={MannatImage} alt="Mannat" className="w-100 srk-banner-img" />
                    </div>
                    {/* Meta */}
                    <div className="srk-meta mb-3">
                        <span><i className="bi bi-eye"></i> 12,452 views</span>
                        <span className="ms-3"><i className="bi bi-calendar"></i> {today}</span>
                    </div>
                    <p className="srk-desc">
                        Learn Everything About Mannat House: Shahrukh Khan, the King Khan of Bollywood, is one of the most beloved stars in the Hindi film business. The Shahrukh Khan mansion in Bandra is a well-known landmark in Mumbai, with many people passing through its gates on a daily basis. Bollywood admirers from all over the world gather at his home to catch a peek of the megastar or simply to grab a photograph outdoors.
                    </p>
                    <p className="srk-desc">
                        Shahrukh Khan, known as the Baadshah of Bollywood, is a renowned actor and producer. He began his career as the lead in the popular TV series Fauji in 1989 and acted in his debut film, Deewana, in 1992; the rest is history! Shahrukh Khan has won hearts over and again, from notable performances early in his career in films like Darr, Karan Arjun, and Baazigar to blockbuster smashes that crossed 100 crores like Chennai Express, Jab Tak Hai Jaan, Happy New Year, and more. He has been a vital member of the Bollywood film industry for more than three decades.
                    </p>
                    <p>
                        Learn Everything About Mannat House: Shahrukh Khan, the King Khan of Bollywood,
                        is one of the most beloved stars in the Hindi film business. The Shahrukh Khan
                        mansion in Bandra is a well-known landmark in Mumbai, with many people passing
                        through its gates on a daily basis. Bollywood admirers from all over the world
                        gather at his home to catch a peek of the megastar or simply to grab a
                        photograph outdoors.
                    </p>

                    <p>
                        Shahrukh Khan, known as the Baadshah of Bollywood, is a renowned actor and
                        producer. He began his career as the lead in the popular TV series Fauji in 1989
                        and acted in his debut film, Deewana, in 1992; the rest is history! Shahrukh Khan
                        has won hearts over and again, from notable performances early in his career in
                        films like Darr, Karan Arjun, and Baazigar to blockbuster smashes that crossed
                        100 crores like Chennai Express, Jab Tak Hai Jaan, Happy New Year, and more.
                        He has been a vital member of the Bollywood film industry for more than three decades.
                    </p>

                    <p>
                        But it isn’t just his performance that has won him over the hearts of people
                        globally. Shahrukh Khan is also noted for his effortless charm, which is enhanced
                        by his status as a wonderful husband to Gauri Khan and adoring father to Aryan,
                        Suhana, and Abram. When not filming or advertising, Shahrukh Khan enjoys spending
                        time with his family in their magnificent home, Mannat, in Bandra, Mumbai.
                    </p>

                    <h3>Shah Rukh Khan & Family Move Out of Mannat – Gauri Plans Expansion</h3>

                    <p>
                        Shah Rukh Khan, his family, and their entire crew have moved out of Mannat and
                        are now renting a house nearby. Their new home is two luxurious duplex apartments
                        in the Puja Casa building in Mumbai’s Pali Hill district of Khar.
                    </p>

                    <p>
                        This new residence for the Khan family is roughly half the size of Mannat. The
                        combined space of these two flats is around 10,500 square feet, whereas Mannat
                        is 27,000 square feet. The rental agreement for this property was registered on
                        February 14, 2025, and a stamp fee of Rs 2.22 lakh was paid.
                    </p>

                    <p>
                        Shahrukh has leased these two residences for three years, beginning on April 1,
                        2025. The Bhagnani family owns the Puja Casa building, which is located about
                        three kilometers from Mannat. The duplexes are positioned on the first and second
                        levels, as well as the seventh and eighth floors.
                    </p>

                    <p>
                        Meanwhile, Shah Rukh Khan’s wife, Gauri Khan, is striving to expand Shah Rukh
                        Khan House in Mannat. The house currently has six levels; once the expansion is
                        completed, Mannat will have eight floors on the enormous 27,000-square-foot
                        property. Approximately 616.02 square meters will be added to the total built-up
                        area. The anticipated cost of these two more floors is INR 25 crore.
                    </p>

                    <h3>Shah Rukh Khan’s Mannat House: Key Facts</h3>

                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shah Rukh Khan’s house name</td>
                                <td>Mannat</td>
                            </tr>
                            <tr>
                                <td>Location of the house</td>
                                <td>Mannat, Land’s End, Bandstand, Bandra (West), Mumbai</td>
                            </tr>
                            <tr>
                                <td>Area (in sq ft)</td>
                                <td>27,000 sq ft</td>
                            </tr>
                            <tr>
                                <td>Shah Rukh Khan house price</td>
                                <td>Rs 200 Crores Approx (Source: HT)</td>
                            </tr>
                            <tr>
                                <td>Total no. of floors</td>
                                <td>Six</td>
                            </tr>
                            <tr>
                                <td>Architect</td>
                                <td>Architect Rajiv Parekh renovated in 2016</td>
                            </tr>
                            <tr>
                                <td>Interior Designer</td>
                                <td>Gauri Khan & Kaif Faqui</td>
                            </tr>
                            <tr>
                                <td>SRK Net Worth</td>
                                <td>Approx 750 Million USD</td>
                            </tr>
                            <tr>
                                <td>SRK Houses in other cities</td>
                                <td>Delhi, Dubai & Alibaug farmhouse</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>SRK House Price</h3>
                    <p>
                        SRK’s Mannat mansion is reported to be worth approximately 200 crores.
                    </p>

                    <h3>Shahrukh Khan House Address</h3>
                    <p>
                        The address of the Shahrukh Khan house is as follows:
                        <br />
                        <b>Mannat, Land’s End, Bandstand, Bandra (West), Mumbai, Maharashtra – 400050.</b>
                    </p>

                    <h3>Nameplate of SRK’s House – Mannat</h3>
                    <p>
                        Everything about Shahrukh Khan’s residence is opulent and blingy, including
                        his nameplate. Gauri Khan, Mannat’s chief interior designer, designed this
                        stunning nameplate. It is said to have cost approximately Rs 25 lakh and is
                        encrusted with diamonds, which makes it extremely valuable.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-1.png"
                            alt="Mannat Nameplate"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Shahrukh Khan Mannat House: Inside Tour</h3>
                    <p>
                        The opulent residence is six stories tall and covers over 27,000 square feet.
                        These floors house five bedrooms, a cutting-edge gym, a breathtaking swimming
                        pool, an enormous library, Shahrukh’s office, a spectacular patio, and a private
                        movie theatre. Each room has a personal touch added by Gauri Khan.
                    </p>

                    <h3>Aryan Khan and Abram enjoying luxury leather chairs at home</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-2.png"
                            alt="Aryan and Abram"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Living Room in Shahrukh Khan’s House</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-3.png"
                            alt="Living Room"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Mannat’s living area features plush carpets, elegant furnishings, artwork from
                        around the world, and a wooden stairway that leads to the upper floors.
                        It took almost a decade to design and construct this mansion according to the
                        Khan family's needs.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-4.png"
                            alt="Mannat Interior"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        The inside is elegant and imposing, with accent walls and stunning artwork
                        curated by King Khan.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-5-1.png"
                            alt="Interior Artwork"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Shahrukh Khan’s Mannat House Bedrooms</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-6.png"
                            alt="SRK Bedroom"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        The bedroom design redefines luxury with marble flooring, an extravagant
                        chandelier, plush rugs, exquisite blinds, and a massive bed. The magnificent
                        fur blanket adds to the room’s grandeur.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-7.png"
                            alt="Aryan and Abram"
                            className="img-fluid"
                        />
                    </div>

                    <p>Aryan Khan and Abram share a lovely brother moment.</p>

                    <h3>Shahrukh Khan Mannat House Details</h3>

                    <div className="post-image-container">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image.png"
                            alt="Mannat"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        The Shahrukh Khan mansion, a stunning six-story villa with a mix of historic and
                        contemporary style, is a luxury sea-facing residence meant to dazzle. Everything
                        about this property, from the architecture to the opulent interiors, exudes
                        royalty. With its great location on Bandstand, stunning interiors, and
                        statement art and design opulence.
                    </p>
                    <p>
                        The children’s bedroom is also tastefully decorated. The walls are covered in
                        contemporary paintings, and the space has a huge poster bed with a black headboard.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-8.png"
                            alt="Children Bedroom"
                            className="img-fluid"
                        />
                    </div>

                    <p>Abram in his bedroom at the Shahrukh Khan residence.</p>

                    <h3>Walk-in-Closet Inside Mannat</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-9.png"
                            alt="Walk-in Closet"
                            className="img-fluid"
                        />
                    </div>

                    <p>Gauri Khan poses, surrounded by her sneakers.</p>

                    <p>
                        Many people consider Shahrukh and Gauri to be style icons. The image above shows
                        Gauri’s space. Glass sleeves hold luxury shoes, and the gorgeous vintage-style
                        dressing table with an amazing mirror steals the show.
                    </p>

                    <h3>Office and Study Areas in Shahrukh Khan House</h3>

                    <p>
                        As you can see in the video above, this small location doubles as the mega
                        superstar’s office and recording studio. A magnificent modern art piece hangs
                        on the wall, along with glass shelves, dark wood cabinets, and a minimalist
                        workstation. The shelves contain family photos and caricature figures of King Khan.
                    </p>

                    <p>
                        The house’s magnificent award room or lounge is an extension of this stylish
                        office. As shown in the video above, the room’s major theme is woody brown.
                        From the dark wood panelled walls to the comfortable leather sofa to the
                        majestic rug on the floor, everything about this space is stunning.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-10.png"
                            alt="Gauri Workspace"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Gauri Khan in her working space within her lovely home, Mannat.
                        Gauri’s workplace has wood-panelled walls. The walls are covered with degrees,
                        certificates, and design elements, while the shelves are stacked with books.
                    </p>

                    <h3>Terrace at SRK’s Mannat House</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-11.png"
                            alt="Terrace Seating"
                            className="img-fluid"
                        />
                    </div>

                    <p>Gauri Khan poses in the seating area of her terrace.</p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-12.png"
                            alt="Terrace Garden"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Gauri and Abram are reading on their terrace garden overlooking the Arabian Sea.
                    </p>

                    <p>
                        In her interviews, Gauri Khan stated that the terrace is her favourite aspect
                        of the property. It not only offers a beautiful sea view, but is also tastefully
                        decorated with plants.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-13.png"
                            alt="Terrace Plants"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Gauri Khan is surrounded by areca palms, ferns, pothos, and other plants in her
                        terrace garden. Statement furniture pieces lend a trendy element, while the
                        intricate rug steals the show.
                    </p>

                    <h3>Photo Tour of Inside Mannat House – The SRK Residence</h3>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-14.png"
                            alt="Photo Tour 1"
                            className="img-fluid"
                        />
                    </div>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-15.png"
                            alt="Photo Tour 2"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Inside Mannat, there is a lounge space with grey carpet and a low table for
                        children to play.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-16.png"
                            alt="Bathroom 1"
                            className="img-fluid"
                        />
                    </div>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-17.png"
                            alt="Bathroom 2"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Farmhouse of Shahrukh Khan and Gauri Khan</h3>

                    <p>
                        Shahrukh Khan also owns a 20,000 square metre property in Alibaug, which he
                        frequently visits with friends and family.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-18.png"
                            alt="Alibaug Farmhouse 1"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Alia Bhatt and Katrina Kaif visited Shahrukh Khan’s property in Alibaug,
                        photographed by Abram.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-19.png"
                            alt="Alibaug Farmhouse 2"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Shahrukh Khan photographed Farah Khan and Karan Johar in their Alibaug farmhouse.
                    </p>

                    <h3>Surprising Amenities in Mannat</h3>

                    <p>
                        Mannat is more than simply a mansion — it is a spectacle. SRK enjoys an enviable
                        lifestyle, and Mannat’s features are out of this world.
                    </p>

                    <p>
                        <strong>Elevator System:</strong> Mannat includes six levels and a lift system
                        for SRK and his family's convenience.
                    </p>


                    <h3>Mini Theatre</h3>
                    <p>
                        Shah Rukh Khan is an actor who values quality cinema. To provide a superb movie
                        experience, SRK has erected a little theatre with 42 burgundy recliner chairs
                        and a theatre-style screen.
                    </p>

                    <h3>A Library</h3>
                    <p>
                        The home also has a vast library with shelves that stretch from floor to ceiling
                        and thousands of books. This section features tanned leather couches and a wall
                        with SRK’s trophies.
                    </p>

                    <h3>Swimming pool</h3>
                    <p>
                        Mannat also has a private swimming pool, which according to accounts is located
                        in the back of the property.
                    </p>

                    <h3>House Tour of Shahrukh Khan’s Delhi House</h3>

                    <p>
                        Both Shahrukh and Gauri grew up in Delhi, so the capital holds a particular
                        place in their hearts. They possess a lavish yet stunning mansion in affluent
                        South Delhi and have recently created a home on the Airbnb platform. The apartment
                        is filled with family pictures and memories, such as Aryan’s first badminton
                        racket, Suhana’s first make-up kit, and a plethora of family photos throughout
                        the years.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-20.png"
                            alt="Delhi House"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        Inside the Shahrukh Khan residence in Delhi, family portraits line the stairway.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-21.png"
                            alt="Delhi House Gallery"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Other Properties Owned by Shahrukh Khan</h3>
                    <p>
                        The badshah of Bollywood has numerous properties around the world. From New York
                        to Dubai, Shahrukh Khan owns some of the most luxurious and beautiful properties.
                    </p>

                    <h3>Shahrukh Khan’s House in Dubai</h3>
                    <p>
                        SRK’s Dubai home, located on the Palm Jumeirah, is one of his most extravagant
                        houses to date. The unique aspect of this house is that it was given as a gift
                        to the famed Bollywood star by Nakheel.
                    </p>

                    <p>
                        King Khan’s list of properties includes a luxury villa on the Palm Jumeirah
                        named <strong>Jannat</strong>, built across 8500 sq ft. It has a private pool and
                        water sports access.
                    </p>

                    <p>
                        SRK also has a holiday home in Beverly Hills and an apartment in New York City.
                    </p>

                    <h3>Shahrukh Khan House in Beverly Hills, California</h3>
                    <p>
                        SRK owns a luxurious mansion in Beverly Hills. The six-bedroom estate features
                        jacuzzis, a private tennis court, cabanas, and a large swimming pool.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-22.png"
                            alt="Beverly Hills House 1"
                            className="img-fluid"
                        />
                    </div>

                    <p>Shahrukh Khan’s property in California boasts a luxurious pool.</p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-23.png"
                            alt="Beverly Hills House 2"
                            className="img-fluid"
                        />
                    </div>

                    <h3>Shah Rukh Khan’s London home</h3>
                    <p>
                        According to media sources, SRK owns a property on Park Lane, London –
                        worth around £20 million.
                    </p>

                    <h3>Shahrukh Khan Net Worth</h3>
                    <p>
                        Shahrukh Khan is worth an estimated <strong>750 million dollars</strong>. He ranks
                        among the richest actors in the world.
                    </p>

                    <h3>Shahrukh Khan’s Expensive Car Collection</h3>
                    <p>
                        SRK owns around 12 luxurious cars, including Rolls Royce Cullinan Black Badge,
                        Range Rover Sport, BMW i8, Bentley Continental GT, and Bugatti Veyron.
                    </p>

                    <h3>10 Interesting, Rarely Known Facts About Shahrukh Khan</h3>
                    <ul>
                        <li>His original name was Abdul Rahman.</li>
                        <li>He lived with his Naani till age 6.</li>
                        <li>He once owned a restaurant in Delhi.</li>
                        <li>Met Gauri at age 14.</li>
                        <li>He sleeps wearing ironed pyjamas.</li>
                        <li>He is a chain smoker.</li>
                        <li>Also known as “King Khan”.</li>
                        <li>Grandson of freedom fighter Shah Nawaz Khan.</li>
                        <li>His father was also a freedom warrior.</li>
                        <li>Named after a rare orchid flower.</li>
                    </ul>

                    <h3>Mannat 2.0 – Grand Makeover</h3>
                    <p>
                        Mannat is undergoing the biggest renovation in its history. The mansion is wrapped
                        in scaffolding and cranes as work progresses for an upgraded 2-floor expansion.
                    </p>

                    <div className="post-image-container image-fit-contain">
                        <img
                            src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/image-24.png"
                            alt="Mannat Renovation"
                            className="img-fluid"
                        />
                    </div>

                    <p>
                        According to reports, plans include new floors, a glass-walled wing, and new
                        security systems. The Khan family has temporarily moved to a rented apartment
                        in Pali Hill.
                    </p>

                    <h3>Summing Up: Shahrukh Khan House</h3>
                    <p>
                        On Eid, Shahrukh greeted fans from Mannat’s balcony — a tradition paused during
                        the pandemic. The new nameplate also became a viral highlight.
                    </p>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="col-lg-4 pe-lg-0">

                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="Mannat" className=" add-img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
