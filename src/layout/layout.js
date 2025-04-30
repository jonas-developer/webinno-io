import React, { useEffect, useState } from "react";
import "../styles/index.scss";
import Header from "./headers/header";
import Footer from "./footers/footer";
import ToggleLightDark from "../components/toggle-light-dark";
import { tg_theme_toggler } from "../utils/utils";
import Preloader from "../components/preloader";
// Import Images and Videos for pre-loading
import collection_data from "../data/collection-data";
import artdice_images from "../data/artdice-data";
import videos_data from "../data/videos-data";
import videos_data2 from "../data/videos-data2";


const Layout = ({ CMSData, children, blog_page = false }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) {
      tg_theme_toggler();
    }
  }, [loading]);

const preloadedImages = [
  "/assets/img/webinno.png",
];

  const imageFiles = [
    ...preloadedImages,
    ...artdice_images.map((item) => item.img),
    ...videos_data2.map((item) => item.cover),
  ];

  const MainContent = () => (
    <div className="main-content" style={{ visibility: "hidden" }}>
      {imageFiles.map((item, index) => (
        <img key={index} src={item} alt={`Image ${index}`} />
      ))}
    </div>
  );

  useEffect(() => {
    const imageSources = [
      ...collection_data,
      ...artdice_images.map((item) => item.img),
    ];

    const preloadAssets = () => {
      let loadedImages = 0;
      const totalImages = imageSources.length;

      const updateProgress = () => {
        const totalAssets = totalImages;
        const totalLoaded = loadedImages;
        const percentage = (totalLoaded / totalAssets) * 100;
        setProgress(percentage);
      };

      const onImageLoad = () => {
        loadedImages += 1;
        updateProgress();
        if (loadedImages === totalImages) {
          setTimeout(() => setLoading(false), 2000); // Delay of 2 seconds
        }
      };

      imageSources.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = onImageLoad;
        img.onerror = onImageLoad; // Handle errors as well
      });
    };

    preloadAssets();
  }, []);

  if (loading) {
    return (
      <>
        <Preloader progress={progress} />
        <MainContent />
      </>
    );
  }

  return (
    <React.Fragment>
      {loading ? (
        <></>
      ) : (
        <>
          {/* <Header blog_page={blog_page} /> */}
          <main id={blog_page ? "" : "home"} className="fix">
            {children}
          </main>
          {/* <Footer/> */}
          <ToggleLightDark />
        </>
      )}
    </React.Fragment>
  );
};

export default Layout;
