import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="app__video flex__center">
      <div className="app__video-content">
        <div className="app__video-contnet_word">
          <h1>The safest Phone for kids</h1>
          <p>
            CleanPhone gives you access to all of the tools you'll ever need to
            ensure <br /> that your kids are the getting the safest experience.
          </p>
        </div>
        <div className="app__video-content_youtube">
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/watch?v=mk48xRzuNvA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
