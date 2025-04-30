import React from "react"
import ReactPlayer from "react-player"

const VideoPlayer = ({ url, cover, isActive, onClick }) => {
    return (
      <div onClick={onClick} style={{ cursor: 'pointer', position: 'relative' }}>
        {isActive ? (
          <ReactPlayer
          url={url}
          controls={true}
          playing={isActive}
          width="50"
          height="90"
          className="react-player"
        />
        ) : (
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.5)', color: '#fff', textAlign: 'center' }}>
            
          </div>
        )}
      </div>
    );
  };

  export default VideoPlayer