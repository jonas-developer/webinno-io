import React from "react"
import './preloader.css';



const Preloader = ({ progress }) => (
  <div className="uni-preloader">
  <div className="loading">

    <div style={{ width: "100%", height: "100%" }}></div>
    
    
  </div>
  <div className="loading-text">{Math.round(progress)}%</div>
</div>

);

export default Preloader


// <div className="preloader">
// <div className="loading-bar" style={{ width: `${progress}%` }}></div>
// <div className="loading-text">{Math.round(progress)}%</div>
// </div>
