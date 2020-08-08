import React, { useState } from "react";
import { VideoInterface } from "./../../interfaces/VideoInterface";
import VideoPlayer from "./../VideoPlayer";

import "./styles.scss";

const Video: React.FC = () => {
  const [video, setVideo] = useState({
    // src: "//vjs.zencdn.net/v/oceans.mp4"
    qualities: [
      {
        title: "ocean",
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    title: "ocean",
  } as VideoInterface);

  return (
    <div className="video__container">
      <VideoPlayer video={video.qualities} title={video.title} />
    </div>
  );
};

export default Video;
