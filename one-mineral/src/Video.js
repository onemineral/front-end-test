import React, { Component } from 'react'
import './App.css'

import { CSSTransition } from 'react-transition-group'

//Icons
import play from './assets/Play.png'
import pause from './assets/Pause.png'
import vol_off from './assets/Volume_Off.png'
import vol_on from './assets/Volume_On.png'
import fs_on from './assets/Fullscreen_Off.png'
import fs_off from './assets/Fullscreen_On.png'
import time_bar from './assets/Line.png'

class Video extends Component {

    constructor() {
        super()
        this.state = {
            video: 'start',
            volume: 'on',
            fullscreen: false,
            hovering: false,
            fadeOut: false
        }
    }

    videoClick() {
        let prevState = this.state.video

        if (prevState === 'start')
            this.setState({ video: 'playing' })
        else if (prevState === 'playing')
            this.setState({ video: 'pause' })
        else if (prevState === 'pause')
            this.setState({ video: 'playing' })
    }

    toggleVolume() {
        let prevState = this.state.volume

        if (prevState === 'on')
            this.setState({ volume: 'off' })
        else
            this.setState({ volume: 'on' })
    }

    toggleFullscreen() {
        let prevState = this.state.fullscreen

        if (prevState)
            this.setState({ fullscreen: false })
        else
            this.setState({ fullscreen: true })
    }


    render() {
        return (
            <div className="Video">
                <h1>Breathtaking Beauty</h1>
                <div className={(this.state.fullscreen) ? "video-container-fullscreen" : "video-container"}>

                    {/* Video Image */}
                    <img alt="video" src={this.props.image}
                        className="video-screen"
                        onClick={() => this.videoClick()}
                        onMouseOver={() => this.setState({ hovering: true })}
                        onMouseOut={() => this.setState({ hovering: false })}
                    />

                    {/* Pause/Play Button */}
                    <img alt="play" src={play}
                        className={(this.state.video === 'start' || (this.state.video === 'pause' && this.state.hovering)) ? "playButton" : "playButton hidden"}
                        onClick={() => this.videoClick()}
                        onMouseOver={() => this.setState({ hovering: true })}
                        onMouseOut={() => this.setState({ hovering: false })}
                    />
                    <img alt="pause" src={pause}
                        className={(this.state.video === 'playing' && this.state.hovering) ? "playButton" : "playButton hidden"}
                        onClick={() => this.videoClick()}
                        onMouseOver={() => this.setState({ hovering: true })}
                        onMouseOut={() => this.setState({ hovering: false })}
                    />

                    {/* Control Bar */}
                    <div className={(this.state.hovering && this.state.video !== 'start') ? "control-bar" : "control-bar-hidden"}
                        onMouseOver={() => this.setState({ hovering: true })}
                        onMouseOut={() => this.setState({ hovering: false, fadeOut: true })} >
                        <img className="time_bar" alt="time_bar" src={time_bar} />
                        <img alt="fs_on" src={fs_on}
                            className={(this.state.fullscreen) ? "fullscreen" : "none"}
                            onClick={() => this.toggleFullscreen()} />
                        <img alt="fs_off" src={fs_off}
                            className={(!this.state.fullscreen) ? "fullscreen" : "none"}
                            onClick={() => this.toggleFullscreen()} />
                        <img alt="vol_on" src={vol_on}
                            className={(this.state.volume === 'on') ? "volume" : "none"}
                            onClick={() => this.toggleVolume()} />
                        <img alt="vol_off" src={vol_off}
                            className={(this.state.volume === 'off') ? "volume" : "none"}
                            onClick={() => this.toggleVolume()} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;
