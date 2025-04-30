import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import Brands from "../../components/brands/brands"

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = ({CMSData}) => {
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <div className="row justify-content-center">
            <Brands />

            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <p>
                <br/><br/>
                w e b i n n o . i o
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
