import React from "react";
import 'react-slideshow-image/dist/styles.css';
import {Fade,Zoom,Slide} from 'react-slideshow-image';
const slideImages=["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKiWhp6Ys1_qH9nmSrcVmTeJc8uzfbC_H5dFMF0jHVt7yIMNhS","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaJOkqj4tETtm5IXsq746g6xV7Vut76wvXFbe-Sn4PQeSOR0ZF","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhMDyqUVj7mRNIBW_ljL-eR0cgxUcglNl0OPS2sn5RoD0-gWfn","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNYiFYRGSf6JV-JDKelV0vEuQO6hhlyKzUNv-zC7mavyQ50zFI","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0E2QFONaU9cHoGpIUjiTi8hmtdr1rPHlSZWSV5jPDfzuQeYu_"]
function Slider(){
    return(
        <div></div>
    )
}
export default Slider




import React from "react";
import './Homepage.css';

function Homepage() {
    return (
        <div className="home">
            <div className="Home"> 
                <div>
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
                    <div className="buttons">
                        <div>
                            <div className="box"></div>
                            <div><button className="button">Ultimate Next.js 14 Course →</button></div>
                            
                        </div>
                        <div ><input className="input" type="button" value="JSM Masterclass →"/></div>
                    </div>
                    
                    
                            
                    
                </div>
                <div></div>
            </div>
            <div>
                <div className="trustpilot">
                    <div>
                        <img className="trustpilotlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4O_xUgSJ-Mo3r-bjiQXG7vHY8aivhI1aug&s" alt=""/>
                        
                    </div>
                    <div className="footer">
                        <div>
                            <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt=""/>
                            <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt=""/>
                            <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt=""/>
                            <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt=""/>
                            <img className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnF_aSlv18TMDmMtMMUFf5HkjAYy40aBxV6P78cdIAG0MgDMVkLP6TCJfIBzoXDUB9tI&usqp=CAU" alt=""/>
                        </div>
                        <div className="youtubelogo">
                            <div ><img className="youtube" src="https://www.jsmastery.pro/assets/general/icons/youtube.svg" alt=""/></div>
                            <div className="number">700k</div>
                            <div><img className="insta" src="https://www.jsmastery.pro/assets/general/icons/instagram.svg"alt=""/></div>
                            <div className="number">230k</div>
                        </div>
                        
                        
                    </div>
                    <div className="followers">Followers & subscribers</div>
                    <div className="score">
                        <div className="trustscore">TrustScore <b>4.8</b></div>
                        <div className="reviews"><b>1,792</b> reviews</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Homepage;
