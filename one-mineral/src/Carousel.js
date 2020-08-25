import React, { Component } from 'react'
import './App.css'

import Item from './Item'

import { Swipeable } from 'react-swipeable'

//Icons
import line from './assets/Line_Grey.png'
import heart from './assets/Heart.png'
import leftArrow from './assets/Left_Arrow.png'
import rightArrow from './assets/Right_Arrow.png'
import dots1 from './assets/Dots1.png'
import dots2 from './assets/Dots2.png'
import dots3 from './assets/Dots3.png'


//Slide Images
import slide1 from './assets/Coral.png'
import { CSSTransition } from 'react-transition-group'

class Carousel extends Component {

    constructor() {
        super()

        this.wrapper = React.createRef();

        this.state = {
            activeIndex: 0
        }

        this.dots = [
            dots1,
            dots2,
            dots3
        ]

        this.items = [
            {
                index: 0,
                img: slide1,
                subtitle: "The Environment",
                title: "Living Oceans Fundation",
                text: "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach."
            },
            {
                index: 1,
                img: slide1,
                subtitle: "The Carousel",
                title: "Slide Number Two",
                text: "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach."
            },
            {
                index: 2,
                img: slide1,
                subtitle: "The Slider",
                title: "Slide Number Three",
                text: "We help preserve, protect and restore the world’s oceans and aquatic resources through research, education, and outreach."
            }

        ]

        this.length = 3
    }

    goToPrevSlide() {
        let index = this.state.activeIndex

        if (index < 1) {
            index = this.length - 1
        }
        else {
            index--
        }
        this.setState({
            activeIndex: index
        })
    }

    goToNextSlide() {
        let index = this.state.activeIndex

        if (index === this.length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        })
    }

    onSwiped(direction) {
        if (direction === "-1")
            this.goToPrevSlide()
        else
            this.goToNextSlide()
    }

    render() {
        const { activeIndex } = this.state
        return (
            <div className="Carousel">
                <img alt="heart" src={heart} />
                <h3 className="subtitle">20% of your booking will support these organisations</h3>
                <img alt="line" src={line} />
                <Swipeable
                    onSwipedLeft={() => this.onSwiped("+1")}
                    onSwipedRight={() => this.onSwiped("-1")} >
                    <div className="Slide-Show">
                        <div className="arrow">
                            <img alt="leftArrow" src={leftArrow} onClick={() => this.goToPrevSlide()} />
                        </div>
                        <div className="slide">
                            <Item item={this.items[activeIndex]} onTouchStart={() => this.goToNextSlide()} />
                        </div>
                        <div className="arrow">
                            <img alt="rightArrow" src={rightArrow} onClick={() => this.goToNextSlide()} />
                        </div>
                        <div className="dots">
                            <img alt="dots" src={this.dots[this.state.activeIndex]} />
                        </div>
                    </div>
                </Swipeable>
            </div>
        )
    }

}

export default Carousel;
