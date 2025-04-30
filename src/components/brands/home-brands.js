import React, { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"

export function SingleBrand({ img_1, img_2 }) {
  return (
    <div className="brand__item">
      <img
        src={`/assets/img/wallets/${img_1}`}
        className="has-active-light"
        alt="brand"
        style={{ width: "160px" }}
      />
      <img
        src={`/assets/img/wallets/${img_2}`}
        className="has-active-dark"
        alt="brand"
        style={{ width: "160px" }}
      />
    </div>
  )
}

const HomeBrands = () => {
  const animate_1 = useRef(null)
  // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  // }, [])

  return (
    <div
      ref={animate_1}
      className="brand-area section-pb-65"
      // style={{ opacity: "0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <h6 className="brand__title">PARTNERS:</h6>
            <div className="brand__list">
              <SingleBrand img_1="wallet-01.svg" img_2="wallet-light-01.svg" />
              <SingleBrand img_1="wallet-03.svg" img_2="wallet-light-02.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBrands
