import React from "react"
import { Link as SinglePageLink } from "react-scroll"

const ToggleLightDark = () => {
  return (
    <div style={{visibility: "hidden"}}>
    <div className="darkmode-trigger">
      <label className="modeSwitch">
        <input type="checkbox" />
        <span className="icon"></span>
      </label>
    </div>

    {/* <div style={{padding: "4px 8px 4px 8px", backgroundColor: "#fff", cursor: "pointer", fontWeight: "bold", position: "fixed", margin: "16px", right: "54px", bottom: "2px", zIndex: "992", border: "1px solid #666", borderRadius: "6px" }}>
                     
                                <SinglePageLink
                                  activeClass="active"
                                  to="partners"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={1000}
                                  className="section-link"
                                  style={{fontSize: "20px", fontFamily: "Mabry Pro"}}
                                >
                                 Partners
                                </SinglePageLink>
                             
    </div> */}
    </div>

  )
}

export default ToggleLightDark

