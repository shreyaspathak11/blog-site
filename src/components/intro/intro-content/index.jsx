import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import me from "../../../images/me.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img 
                                src={hand}
                                alt="hand" />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Shreyas</span>
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={me}
                        alt="me"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Learning New Technologies</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>1+</span>
                            Year of Experience
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
