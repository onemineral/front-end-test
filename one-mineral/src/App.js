import React, { Component } from 'react'
import './App.css'

import Video from './Video'
import Carrousel from './Carousel'
import Footer from './Footer'

import video_img from './assets/Hero_Image.png'
import footer_img from './assets/Footer_Beach.png'


class App extends Component {

	// constructor() {
	// 	super()
	
	// 	this.state = {
	// 		video: "play"
	// 	}
	// }

	render() {
		return (
			<div className="App">
				<Video image={video_img} />
				<Carrousel />
				<Footer background={footer_img} />
			</div>
		)
	}
}

export default App;
