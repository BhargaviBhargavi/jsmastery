import React, { useState, useEffect } from "react";
import './Homepage.css';

function Slideshow({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow">
            {images.map((image, idx) => (
                <img
                    key={idx}
                    src={image}
                    alt={`slide ${idx}`}
                    className={idx === index ? "active" : ""}
                    style={{
                        transform: `translateX(${(idx - index) * 100}%)`,
                        opacity: idx === index ? 1 : 0
                    }}
                />
            ))}
        </div>
    );
}

function Homepage() {
    const images = [
        "resources/trustpilot1.png",
        "resources/trustpilot2.png",
        "resources/trustpilot3.png",
        "resources/trustpilot4.png",
        "resources/trustpilot5.png"
    ];

    return (
        <div className="home">
            <div className="content">
                <Slideshow images={images} />
                <div className="headline">
                    <span className="master-text">Master</span>
                    {' '}
                    Modern Web Development With a
                    {' '}
                    <span className="project-text">Project</span>
                    {' '}
                    <span className="based-text">Based</span>
                    {' '}
                    Approach
                    <div className="smallText">Gain real-world experience and land that dev job you've always imagined
                    </div>
                </div>
                
            </div>
            <div className="buttons">
                        <div>
                            <div className="box"></div>
                            <div><button className="button">Ultimate Next.js 14 Course →</button></div>
                            
                        </div>
                        <div ><input className="input" type="button" value="JSM Masterclass →"/></div>
                </div>
            <div className="trustpilot">
                <div>
                    <img className="trustpilotlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4O_xUgSJ-Mo3r-bjiQXG7vHY8aivhI1aug&s" alt="" />
                </div>
                <div className="footer">
                    <div>
                        <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt="" />
                        <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt="" />
                        <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt="" />
                        <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt="" />
                        <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt="" />
                    </div>
                    <div className="youtubelogo">
                        <div ><img className="youtube" src="https://www.jsmastery.pro/assets/general/icons/youtube.svg" alt="" /></div>
                        <div className="number">700k</div>
                        <div><img className="insta" src="https://www.jsmastery.pro/assets/general/icons/instagram.svg" alt="" /></div>
                        <div className="number">230k</div>
                    </div>
                    <div><img  className="logopath" src="https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fhome%2Fimages%2Fgithub-star-jsm.webp&w=256&q=75" alt=""/></div>
                </div>
                <div className="followers">Followers & subscribers</div>
                
                    <div className="score">
                        <div className="trustscore">TrustScore <b>4.8</b></div>
                        <div className="reviews"><b>1,792</b> reviews</div>
                    </div>
                   
               
            </div>
        </div>
    );
}

export default Homepage;
