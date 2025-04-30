import React from "react"

const WelcomeSection = () => {
  return (
    <section className="banner-area banner-style-three position-relative">
      <div className="banner__background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/img/bg/gradient_bg02.png" }}
        ></div>
      </div>
      <div className="banner__three-inner">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner__content"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
              >
                <h2 className="title">XXX</h2>
                <p className="desc">
                  $WEBI
                </p>
                <a
                  href="https://app.uniswap.com/"
                  target="_blank"
                  className="banner__btn btn gradient-btn gradient-btn-2 scroll-to-target"
                >
                  <span>CONTACT</span>
                  <i className="unicon-arrow-up-right"></i>
                </a>
                &nbsp; &nbsp; &nbsp; &nbsp;
                {/* <a
                  href="https://app.uniswap.org/explore/tokens/base/0x160381343365de6d5e7d32172987b3e6bd1cce71"
                  target="_blank"
                  className="banner__btn btn gradient-btn-1 gradient-btn-2 scroll-to-target"
                > */}
                {/* <div id="dice-container">NFT Dice&nbsp;<img src="/assets/img/objects/dice.webp" id="dice"/><img src="/assets/img/objects/dice-game.gif" id="dice-hover" class="hover-img"/>&nbsp;
                  </div> */}
                {/* <i>&nbsp;</i>
                </a> */}
                <div className="banner__community">
                  <ul className="list-wrap banner__community-members">
                    <li>
                      <img
                        src="/assets/img/team/f4.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/team/f3.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/team/f2.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/team/f1.png"
                        width="48"
                        alt="members"
                      />
                    </li>
                  </ul>
                  <div className="banner__community-numbers">
                    <h5 className="count">Webinno</h5>
                    <span>Innovative Web Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner__images-two"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
              >
                <img
                  className="shape-two"
                  width="84"
                  src="/assets/img/objects/base-symbol.webp"
                  alt="object"
                  style={{ top: "24%", right: "24%" }}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

                <img
                  className="shape-five"
                  width="280"
                  src="/assets/img/objects/ethereum.gif"
                  alt="object"
                  style={{ bottom: "2%", left: "-8%" }}
                  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
                />

  

                <div className="banner__images-grid-two">
                  <div
                    className="image-grid-item"
                    style={{ transform: "rotate(10.84deg)" }}
                  >
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                      <img
                        src="/assets/img/logo/staybased.gif"
                        alt="WEBINNO"
                      />
                    </div>
                  </div>
                  <div className="image-grid-item">
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                    </div>
                  </div>
                  <div className="image-grid-item">
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                    </div>
                  </div>
                  <div
                    className="image-grid-item"
                    style={{ transform: "rotate(-10.25deg)" }}
                  >
                    <div className="main-image">
                      <canvas width="272" height="272"></canvas>
                      <img
                        src="/assets/img/logo.jpg"
                        alt="artwork"
                      />
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
