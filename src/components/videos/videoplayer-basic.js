import React from "react"
import ReactPlayer from "react-player"

const VideoPlayerBasic = ({ url }) => {
    return (
      <div style={{ cursor: 'pointer', position: 'relative' }}>
     
          <ReactPlayer
          url={url}
          controls={true}
          width="50"
          height="90"
          className="react-player"
        />
       
      </div>
    );
  };

  export default VideoPlayerBasic