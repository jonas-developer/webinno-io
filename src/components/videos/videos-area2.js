import React from "react"
import { useState } from "react";

import videos_data2 from "../../data/videos-data2"

import ReactPlayer from "react-player"
import VideoPlayer from "./videoplayer";

  // Slice the array to get items starting from index 5
  const slicedVideos = videos_data2.slice(6);

const VideosArea2 = ({ CMSData, videos }) => {

  const [play, setPlay] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

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
              <h2 className="title" style={{ fontSize: "44px" }}>
                Video <span className="tg-text-gradient">Clips</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="collection__three-wrapper">
          <div
            style={{
              gap: "10px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
 
            {CMSData.allVideoclips.map((item, index) => (
     
                  <div
                  key={index}
                  style={{
                    margin: "10px 0px 10px 0px",
                    width: "400px",
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
                   
                    <div className="player-wrapper" onClick={handlePlayClick} style={{cursor: "pointer",}}>
                    <VideoPlayer 
                          url={item.url}
                          cover={item.image.url}
                          isActive={activeVideo === index}
                          />
                          {activeVideo !== index ? (
                          <img src={item.image.url} onClick={() => setActiveVideo(activeVideo === index ? null : index)}/>
                          ) : ""}
                          </div>
                  </div>
                </div>

              ))}

          </div>
        </div>
      </div>
    </section>
  )
}


export default VideosArea2
