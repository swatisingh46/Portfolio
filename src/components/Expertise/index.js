import React from 'react';
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import {colors} from "../../style";
import Card from "../UI/Card";
import me from "../../assests/images/me2.png";
import "./style.css";
import SocialConnect from "../UI/SocialConnect";

const percentage=70;
const Expertise=(props)=> {
    return (
        <div className="container" style={{marginTop:"50px",padding:"50px 0px"}}>
            <div data-aos="fade-right" className="rightImgMeContainer">
                <img src={me} alt='error'></img>
                <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
                
            </div>
            <div>
                <SmallHeading text="Expertise" />
                <MediumHeading text="Special Skills" />
            </div>
            <Card style={{ padding:"30px", width:"320px",margin:"100px auto",position:"relative",zIndex:1,}} data-aos="flip-up">
                <div className="flexRow align-center">
                <div style={{width:'80px',height: '80px'}}>
                    <CircularProgressbar 
                        value={percentage}
                        text={`${percentage}%`}
                        style={buildStyles({
                            textColor:colors.primaryColor,
                            pathColor:colors.Primary,
                        })}
                    />
                </div>
                <h2  className="textColor mlr-10">Development</h2>
                
                </div>
                <p className="grey mtb-10 font-14">JavaScript is one of the greatest programming language.</p>
            </Card>
            
        </div>
    )
}

export default Expertise
