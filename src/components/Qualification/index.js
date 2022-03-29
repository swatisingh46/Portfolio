import React from 'react'
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import me from "../../assests/images/me2.png";
import dp from "../../assests/images/dp.png";
import Tile from "../UI/Tile";
import Button from "../UI/Button";

import "./style.css";
const Qualification=(props)=> {
    return (
        <div className="container" style={{padding:'20px 0'}}>
            <img src={dp} alt="error" className="dp" />
            <SmallHeading text="Qualifications"/>
            <MediumHeading text={'My Education'}/>
            <div className="flexRow flexCol align-center justify-sb" style={{padding:'50px 0'}}>
                <div data-aos="fade-up-right">
                    <img className="img" src={me} alt='error' style={{marginTop:"-120px"}}/>
                    <div className="btn" style={{}}>
                        <div style={{marginLeft: "20px"}}>
                        <Button label="Hire Me" />
                        </div>
                        <div style={{marginLeft: "35px"}}>
                        <Button label="Download CV" inverse={true}  />
                        </div>
                    </div>
                </div>
                <div style={{margin:"0px auto"}}>
                    <Tile title="INTERMEDIATE" mediumTitle="Kendriya Vidyalaya AFS Agra" desc="PCM + CS" />
                    <Tile title="Bachelors's in Computer Application" mediumTitle="IGNOU" desc="MAHARSHTRA" />
                </div>
            </div>
        </div>
    )
}

export default Qualification;
