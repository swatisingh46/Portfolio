import React from 'react';
import me from "../../assests/images/me1.png";
import dp from "../../assests/images/dp.png";
import Button from "../UI/Button";
import "./style.css";

const Hero=(props)=> {
    return (
        <div className="container" style={{marginTop:'70px'}}>
            <div className="flexRow flexCol justify-sb align-center">
                <div data-aos="fade-right">
                    <p className="uppercase font-20 bold-500 textColor ls-1 mtb-10"><span className="primaryColor">Hello,</span> I am Swati Singh</p>
                    <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
                    <p className="font-16 grey mtb-10">FullStack Developer Using JS.</p>
                    <div className='flexRow align-center' style={{margin:"30px auto", justifyContent:"center"}}>
                        <div>
                            <Button label="Hire Me" />
                        </div>
                        <div className="mlr-10">
                            <Button label="Download CV" inverse='true'/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                <div className="meRightImgContainer">
                    <img src={me} alt="error" className="img1" />
                    <img src={dp} alt="error" className="img2" />
                </div>
                </div>
            </div>
            
        </div>
    )
    }
export default Hero
