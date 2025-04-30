import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import videos_data2 from "../../data/videos-data2"

import ReactPlayer from "react-player"

// slider setting
const slider_setting = {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    1500: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 0,
    },
    420: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".tg-swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tg-swiper-next",
    prevEl: ".tg-swiper-prev",
  },
}

const VideosArea = () => {
  return (
    <section
      id="videos"
      className="collection-area section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-65">
              <h2 className="title" style={{ fontSize: "44px" }}>
                Video <span className="tg-text-gradient">Clips</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="collection__three-wrapper">
          {/* <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
           */}

          <Swiper
            {...slider_setting}
            modules={[Navigation, Pagination]}
            style={{ width: "66%" }}
            className="swiper-container collection-three-active swiper"
          >
            {videos_data2.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    margin: "auto",
                    width: "65%",
                    textAlign: "center",
                    padding: "20px",
                    border: "2px solid #2F2548",
                    borderRadius: "20px",
                    boxShadow: "5px 5px 8px rgb(200,200,200, 0.2)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{item.title}</p>
                    <div className="player-wrapper">
                      <ReactPlayer
                        url={item.url}
                        controls={true}
                        width="50"
                        height="90"
                        className="react-player"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="tg-swiper-pagination"></div>
          </Swiper>

          <a aria-label="Prev" href="#prev" className="tg-swiper-prev">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a aria-label="Next" href="#next" className="tg-swiper-next">
            <i className="fas fa-chevron-right"></i>
          </a>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

// Episode Links:
// https://youtu.be/bLkfTBLd9qM?si=Xul_WIg14htZH9ba (Episode 1)

export default VideosArea
