import React, { Component } from 'react'
import './App.css'

import { CSSTransition, TransitionGroup } from "react-transition-group"


class Item extends Component {

    render() {
        const { item } = this.props
        return (
            <TransitionGroup className="Item">
                <CSSTransition
                    key={item.index}
                    timeout={600}
                    classNames="slide">
                    <div className="slide-container">
                        <div className="img" alt={item.img} style={{backgroundImage: `url(${item.img})`}}></div>
                        <div className="device">
                            <div>
                                <h2>{item.subtitle}</h2>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </div>
                            <button>
                                <p>FIND OUT MORE</p>
                            </button>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default Item;
