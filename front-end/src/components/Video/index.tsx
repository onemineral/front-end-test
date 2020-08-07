import React, { useState } from 'react';
import { VideoInterface } from './../../interfaces/VideoInterface';
import VideoPlayer from './../VideoPlayer';

import { Container } from './styles';

const Video: React.FC = () => {

  const [video, setVideo] = useState({
    // src: "//vjs.zencdn.net/v/oceans.mp4"
		qualities: [
			{title: 'ocean', src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4'},
		],
		title: 'ocean'
	} as VideoInterface);



  return (
    <Container>
      <VideoPlayer video={video.qualities} title={video.title}/>
    </Container>
  );
}

export default Video;