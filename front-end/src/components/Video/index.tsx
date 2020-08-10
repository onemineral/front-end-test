import React, { useState } from "react";
import { VideoInterface } from "./../../interfaces/VideoInterface";
import VideoPlayer from "./../VideoPlayer";

import "./styles.scss";

const videoObj = {
  qualities: [
    {
      title: "ocean",
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
  title: "ocean",
} as VideoInterface;

const Video: React.FC = () => {
  return (
    <div className="video__container">
      <VideoPlayer video={videoObj.qualities} title={videoObj.title} />
    </div>
  );
};

export default Video;
