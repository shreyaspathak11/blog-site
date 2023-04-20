import React from 'react'

import "./style.scss"
import cloud from "./images/cloud.png"
import cloud2 from "./images/cloud-soft.png"

const Intro = () => {
  return (
    <div className="intro-section">
        <div 
        className="vector-bg"
        id='parallax'
        ></div>
        <img src={cloud}
        className="cloud-soft"
        alt='cloud'
        />
        <img src={cloud2}
        className="cloud-soft"
        alt='cloud'
        />

    </div>
  )
}

export default Intro