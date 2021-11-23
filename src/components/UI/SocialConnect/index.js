import React from 'react';
import facebook from "../../../assests/social-icons/facebook.png";
import instagram from "../../../assests/social-icons/instagram.png";
import linkedin from "../../../assests/social-icons/linkedin.png";
import youtube from "../../../assests/social-icons/youtube.png";
import "./style.css";

const SocialConnect= (props)=> {
    return (
        <div className="socialConnect" style={props.style}>
            <span className="textColor font-14 bold-600">Follow me on:</span>
            <a className="sociallink" href="https://www.wikipedia.org/">
                <img src={facebook} alt="error" />
            </a>
            <a className="sociallink" href="https://www.wikipedia.org/">
                <img src={instagram} alt="error" />
            </a>
            <a className="sociallink" href="https://www.wikipedia.org/">
                <img src={linkedin} alt="error" />
            </a>
            <a className="sociallink" href="https://www.wikipedia.org/">
                <img src={youtube} alt="error" />
            </a>
        </div>
    )
}

export default SocialConnect