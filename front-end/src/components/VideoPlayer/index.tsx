import React, { useState, useRef, SyntheticEvent } from 'react';
import {VideoQualityInterface} from '../../interfaces/VideoQualityInterface';

import classnames from "classnames";
import './styles.scss';

import {ReactComponent as PlayIcon} from '../../assets/icons/play.svg';
import {ReactComponent as PauseIcon} from '../../assets/icons/pause.svg';
import {ReactComponent as SpeakerIcon} from '../../assets/icons/speaker.svg';
import {ReactComponent as FullscreenIcon} from '../../assets/icons/fullscreen.svg';

const VideoPlayer: React.FC<{video: VideoQualityInterface[], title?: string}> = (props: any) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isAdjustingVolume, setIsAdjustingVolume] = useState(false);
	const [currentVideo, setCurrentVideo] = useState(props.video[0]);
	const [currentTime, setCurrentTime] = useState(0);
	const [previewTime, setPreviewTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const container = useRef<HTMLDivElement>(null);
	const video = useRef<HTMLVideoElement>(null);

	const play = () => {
		video?.current?.play();
	}


	const pause = () => {
		video?.current?.pause();
	}


	const adjustVolume = (vol: number) => {
		if(video.current) video.current.volume = vol;
		setVolume(vol);
	};


	const toggleFullScreen = () => {
		if (document.fullscreenElement !== null) {
			document.exitFullscreen().then(() => setIsFullscreen(false));
		} else {
			if(container.current) container.current.requestFullscreen().then(() => setIsFullscreen(true));
		}
	};


	const scrubHandler = (e: SyntheticEvent) => {
		const {target} = e;
		// @ts-ignore
		const progress = target.value;
		gotoTime(progress);
	}


	const scrubHoverHandler = (e: SyntheticEvent) => {
		const {target} = e;
		// @ts-ignore
		const clickX: number = e.pageX;
		const targetLeft: number = (target as HTMLButtonElement).getBoundingClientRect().left;
		const targetWidth: number = (target as HTMLButtonElement).getBoundingClientRect().width;
		const progress: number = (clickX-targetLeft) / targetWidth; // 0-1
		const newTime = duration * progress;
		setPreviewTime(newTime);
	}
	const gotoTime = (time: number) => {
		setCurrentTime(time);
		// setTimeout() is required, or else video will be null when gotoTime() runs directly after having changed currentVideo, so video in turn always resets to time 0 when changing quality.
		setTimeout(() => {
			if(video.current) video.current.currentTime = time;
		}, 50);
	}


	const formatTime = (time: number) => {
		const seconds = Math.floor(time % 60);
		const minutes = Math.floor(time / 60 % 60);
		const hours = Math.floor(time / 60 / 60 % 60);
		return (
			(hours ? hours : '') + 
			(hours && minutes ? ':' : '') + 
			minutes + 
			':' + 
			seconds.toString().padStart(2, '0')
		);
	}

	return (
		<div className="video" ref={container}>
			<video 
			src={currentVideo.src}
			tabIndex={0}
			ref={video}
			onLoadedMetadata={(e: SyntheticEvent) => setDuration((e.target as HTMLVideoElement).duration)}
			onTimeUpdate={(e: SyntheticEvent) => setCurrentTime((e.target as HTMLVideoElement).currentTime)}
			onPlay={() => setIsPlaying(true)}
			onPause={() => setIsPlaying(false)}
			onClick={() => {
				isPlaying ? pause() : play();
			}}
			onDoubleClick={toggleFullScreen}
			onKeyUp={e => [' ', 'Enter'].includes(e.key) ? isPlaying ? pause() : play() : null}>
			</video>

			<button className="video__statusIcon" aria-label="Play/pause video" onClick={isPlaying ? pause : play}>{currentTime == 0 ? <PlayIcon /> : isPlaying ? <PauseIcon/> :  <PlayIcon /> }</button>

			<div className="video__controls">


				<div className="video__controls__lower">
					<div className="video__controls__left">
					<div className="video__scrub" aria-label="Scrub through video">
					<input type="range" className="video__scrub__scrubber" value={currentTime} max={duration} onChange={scrubHandler} onMouseMove={scrubHoverHandler} onMouseLeave={() => setPreviewTime(0)}/>
					<div className="video__scrub__track"></div>
					<div className="video__scrub__line" style={{'width': `${currentTime/duration*100}%`}}></div>
					{previewTime > 0 && previewTime < duration && <span className="video__scrub__preview" style={{'left': `${previewTime/duration*100}%`}}>{formatTime(previewTime)}</span>}
				</div>					
					</div>

					<div className="video__controls__right">
						
						<span className="video__volume" onMouseOver={() => setIsAdjustingVolume(true)} onMouseLeave={() => setIsAdjustingVolume(false)}>
							<button className={`video__volume__toggle ${volume === 0 ? 'isMuted' : ''} ${volume > 0 ? 'level1' : ''} ${volume > .33 ? 'level2' : ''} ${volume > .66 ? 'level3' : ''}`} aria-label="Mute/unmute video" onClick={() => adjustVolume(0)} onFocus={() => setIsAdjustingVolume(true)} onBlur={() => setIsAdjustingVolume(false)}>
								<SpeakerIcon/>
							</button>
							<input type="range" min="0" max="1" step="0.02" value={volume} className="video__volume__scrub" style={{width: !isAdjustingVolume ? '0' : '60px', opacity: !isAdjustingVolume ? '0' : '1'}} onChange={e => adjustVolume(parseFloat((e.target as HTMLInputElement).value))} onFocus={() => setIsAdjustingVolume(true)} onBlur={() => setIsAdjustingVolume(false)}/>
						</span>
						<button className="video__fullscreen" aria-label="Toggle video fullscreen mode" onClick={toggleFullScreen}><FullscreenIcon/></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer;