import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { window } from "browser-monads"
import { Link as SinglePageLink } from "react-scroll"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useLocation } from "@reach/router"
// internal
import OffCanvas from "../../components/common/off-canvas"
import ConnectModal from "../../components/common/modals/connect-modal"
import useSticky from "../../hooks/use-sticky"
import { menu_data } from "../../data/menu_data"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

// import "./main.css"

//import SignAndStore from "./SignAndStore";

const projectId = "cd58badf74e4e40b6eefd3a9ebfe614b"
if (!projectId) throw new Error("Project ID is undefined")

// const mainnet = {
//   chainId: 1,
//   name: 'Ethereum',
//   currency: 'ETH',
//   explorerUrl: 'https://etherscan.io',
//   rpcUrl: 'https://cloudflare-eth.com'
// }

const base = {
  chainId: 8453,
  name: "BASE",
  currency: "ETH",
  explorerUrl: "https://basescan.org",
  rpcUrl: "https://mainnet.base.org",
}

const metadata = {
  name: "WEBINNO.IO",
  description: "WEBINNO - Innovative Web Services - webinno.io",
  url: "https://webinno.io",
  icons: ["https://webinno.io/assets/img/favicon.png"],
}

const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "https://mainnet.base.org", // used for the Coinbase SDK
  defaultChainId: 8453, // used for the Coinbase SDK
  auth: {
    email: false,
    //socials: [], // add social logins (this will create a non-custodial wallet) //
    showWallets: true,
    walletFeatures: false,
  },
})

createWeb3Modal({
  ethersConfig,
  chains: [base],
  projectId,
  enableAnalytics: false,
})

const Header = ({ blog_page }) => {
  const { sticky } = useSticky()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  let { pathname } = useLocation()

  // let parentClass = ""
  // if (pathname.startsWith("/news") || pathname.startsWith("/news")) {
  //   parentClass = "active"
  // }

  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.classList.add("mobile-menu-visible")
    } else {
      window.document.body.classList.remove("mobile-menu-visible")
    }
  }, [isSidebarOpen])

  // handleClick
  const handleClick = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header>
      <div
        id="sticky-header"
        className={`tg-header__area transparent-header ${
          sticky ? "sticky-menu" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={handleClick} className="mobile-nav-toggler">
                <i className="flaticon-menu-2" style={{ fontSize: "50px" }}></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
      
                  <div className="logo">
                    <a href="#" className="light-logo">
                      <img
                        src="/assets/img/hfc_original.png"
                        alt="webinno.io"
                        height="40"
                      />
                    </a>

                    <a href="#" className="dark-logo">
                      <img
                        src="/assets/img/hfc_original.png"
                        alt="webinno.io"
                        height="40"
                      />
                    </a>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data.map((menu, i) => (
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li className={`menu-item-has-children`}>
                              {menu.title !== "Blog" && (
                                <SinglePageLink
                                  activeClass="active"
                                  to={menu.link}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  className="section-link"
                                >
                                  {menu.title}
                                </SinglePageLink>
                              )}
                              {/* {menu.title === "News" && (
                                <Link
                                  className={`${parentClass}`}
                                  to={menu.link}
                                >
                                  {menu.title}
                                </Link>
                              )} */}
                            </li>
                          ) : (
                            <li>
                              <SinglePageLink
                                activeClass="active"
                                to={menu.link}
                                spy={false}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="section-link"
                              >
                                {menu.title}
                              </SinglePageLink>
                            </li>
                          )}
                        </React.Fragment>
                      ))}

                    <li>
                        <a
                          href="https://t.me/webinno_io"
                          target="_blank"
                        >
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                    </li>
                    <li>
                    <a
                          href="https://x.com/webinno_io"
                          target="_blank"
                          className="d-none d-sm-block"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    </ul>
                  </div>
                  <div className="tgmenu__action">


    
                     

                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <OffCanvas setIsSidebarOpen={setIsSidebarOpen} data_1={true} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Connect Wallet Modal --> */}
      {/* <ConnectModal /> */}
      {/* <!-- Connect Wallet Modal --> */}
    </header>
  )
}

export default Header
