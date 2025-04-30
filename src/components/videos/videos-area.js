import React from "react"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import videos_data from "../../data/videos-data"

import ReactPlayer from "react-player"

// slider setting
const slider_setting = {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 48,
  breakpoints: {
    1500: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 35,
    },
    576: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 30,
    },
    420: {
      slidesPerView: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 20,
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

const VideosArea = ({ CMSData, url }) => {

  const [play, setPlay] = useState(false);

  const handlePlayClick = () => {
    setPlay(true);
  };

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
              <h2 className="title" style={{ fontSize: "50px" }}>
                WEBINNO {" "}
                <span className="tg-text-gradient">Promo</span>
              </h2>
            </div>
          </div>
        </div>




        <div className="collection__three-wrapper">
    


          <Swiper
            {...slider_setting}
            modules={[Navigation, Pagination]}
            style={{ width: "86%" }}
            className="swiper-container collection-three-active swiper"
          >
            {CMSData.allVideos.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    border: "2px solid #2F2548",
                    borderRadius: "20px",
                    boxShadow: "5px 5px 8px rgb(200,200,200, 0.2)",
                  }}
                >
                  <div onClick={handlePlayClick}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <p>{item.title}</p>

                    {!play && <div><img src={item.image.url}/></div>}
                    {play && (                    
                    <ReactPlayer
                      url={item.url}
                      
                      controls={true}
                      width="100"
                      height="56"
                    />
                  )}

                    
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


export default VideosArea
