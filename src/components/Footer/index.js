import React from 'react';
import SocialConnect from "../UI/SocialConnect";
import conversation from "../../assests/images/conversation.png";
import "./style.css";

const Footer = (props) => {
    return (
        <div className="container">
            <div className="flexRow flexCol justify-sb align-center">
                <div className="flexRow flexCol justify-sb align-center" style={{ margin: "0px 0" }}>
                    <div className="mtb-10">
                        <SocialConnect />
                    </div>
                    <div className="footerMenus mtb-10" style={{marginTop:"20px"}}>
                        <nav>
                            <a href="https://www.wikipedia.org/">Home</a>
                            <a href="https://www.wikipedia.org/">About</a>
                            <a href="https://www.wikipedia.org/">Portfolios</a>
                            <a href="https://www.wikipedia.org/">Blog</a>
                            <a href="https://www.wikipedia.org/">Contact</a>
                        </nav>
                    </div>
                    <div className="conversationContainer primaryBgColor mtb-10" style={{marginTop:"10px",marginLeft:"150px"}}>
                        <img src={conversation} alt="" />
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Footer;
