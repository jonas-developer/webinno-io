import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
// internal
import MobileMenus from "./mobile-menus"
import { menu_data } from "../../../data/menu_data"

const OffCanvas = ({
  setIsSidebarOpen,
  data_1 = false,
  data_2 = false,
  data_3 = false,
}) => {
  const [menuItems, setMenuItems] = useState([])
  // decide to render
  useEffect(() => {
    if (data_1) {
      setMenuItems(menu_data)
    }
  }, [])
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            <i className="flaticon-close-1"></i>
          </div>
          <div className="nav-logo">
            <a href="#" className="light-logo">
              <img
                src="/assets/img/logo/logo_big.jpg"
                alt="webinno.io"
              />
            </a>

            <a href="#" className="dark-logo">
              <img
                src="/assets/img/logo/logo_big.jpg"
                alt="webinno.io"
                width="300"
              />
            </a>
          </div>
          <div className="tgmobile__menu-outer">
           
            <MobileMenus
              menuItems={menuItems}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <a href="https://x.com/webinno_io" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/webinno_io" target="_blank">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="tgmobile__menu-backdrop"
      ></div>
    </>
  )
}

export default OffCanvas
