import React from 'react'
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import me from "../../assests/images/me2.png";
import Tile from "../UI/Tile";
import Button from "../UI/Button";

import "./style.css";
const Qualification=(props)=> {
    return (
        <div className="container" style={{padding:'50px 0'}}>
            <SmallHeading text="Qualifications"/>
            <MediumHeading text={'My Education'}/>
            <div className="flexRow flexCol align-center justify-sb" style={{padding:'50px 0'}}>
                <div data-aos="fade-up-right">
                    <img src={me} alt='error' style={{marginTop:"-120px"}}/>
                    <div style={{background:"#fff",padding:"10px 10px",boxSizing:"border-box",display:"flex", borderRadius:'20px'}}>
                        <div className="mlr-10">
                        <Button label="Hire Me" />
                        </div>
                        <div className="mlr-10">
                        <Button label="Download CV" inverse={true} />
                        </div>
                    </div>
                </div>
                <div style={{margin:"0px auto"}}>
                    <Tile title="MAKAUT" mediumTitle="Computer Science and Engg." desc="lorem ipsum text" />
                    <Tile title="MAKAUT" mediumTitle="Computer Science and Engg." desc="lorem ipsum text" />
                    <Tile title="MAKAUT" mediumTitle="Computer Science and Engg." desc="lorem ipsum text" />
                </div>
            </div>
        </div>
    )
}

export default Qualification;
