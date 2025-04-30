import React from "react"
import { useState } from "react"
import artdice_images from "../../data/artdice-data"
import { SingleBrand } from "../brands/home-brands"

const WelcomeSection = ({CMSData}) => {
  const [currentImage, setCurrentImage] = useState(artdice_images[0])

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * artdice_images.length)
    setCurrentImage(artdice_images[randomIndex])
  }

  return (
    <section className="banner-area banner-style-three position-relative">
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/bg/gradient_bg01.png" }}
        ></div>
      </div>
      <div className="banner__three-inner">
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
                style={{justifyContent: "center", width: "100%"}}
              >
                <span className="titleF">WEBINNO.IO
                <br/>
                </span>
                <p className="desc" style={{fontSize: "30px", lineHeight: "40px"}}>
                From pixel struggles to powerful web solutions—your beacon in the digital world.
                </p>
                <p style={{fontSize: "18px", padding: "5px"}}>
                <b>Design, Hosting, CMS, Web3</b>
                </p>
                <div style={{ margin: "0px", padding: "6x" }}>
      

  
                  <ul className="list-wrap footer__social welcome-menu">

                  <a
                    href="mailto:contact@webinno.io"
                    target="_blank"
                    className="banner__btn btn scroll-to-target"
                    style={{ margin: "10px 0px" }}
                  >
                    <span style={{fontSize: "24px"}}>Contact</span>
                    {/* <i className="unicon-arrow-up-right"></i> */}
                  </a>

                  <li>
                    <a href="https://t.me/webinno_io">
                      <img src="/assets/img/icons/tg.svg" style={{width: "50px"}}/>
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/webinno_io">
                    <img src="/assets/img/icons/x.svg" style={{width: "50px"}}/>
                    </a>
                  </li>

                 
                 
                </ul>

                </div>

                <div className="mobile-webinno">
                <img src="/assets/img/logo.jpg"/>
                </div>

      
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner__images-two"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >


                <div className="banner__images-grid-two">
                  <div
                    className="image-grid-item"
                    style={{ transform: "0px" }}
                  >
                    <div className="main-image" onClick={changeImage}>
                      {/* <canvas width="400" height="400"></canvas>  */}
                     <img src={currentImage} alt="Webinno" /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
