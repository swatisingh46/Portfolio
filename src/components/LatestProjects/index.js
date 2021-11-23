import React from 'react';
import Card from "../UI/Card";
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import latestProject from "../../assests/projects/project1.png";
import "./style.css";
import Button from '../UI/Button';

const LatestProjects=(props)=> {
    return (
        <div className="container" style={{marginTop:'50px',marginBottom:'50px'}} data-aos="zoom-in-up">
            <Card className="flexRow flexCol align-center justify-sb">
                <div className="projectPortfolioContainer">
                    <SmallHeading text="Portfolios"/>
                    <MediumHeading text="Latest Projects"/>
                    <div style={{margin:'30px 0'}}>
                    <Button label="Portfolios"/>
                    </div>
                </div>
                <div className="projectImgContainer">
                    <img src={latestProject} alt='error' />
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects