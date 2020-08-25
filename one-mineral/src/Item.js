import React, { Component } from 'react'
import './App.css'


class Item extends Component {

    render() {
        return (
            <div className="Item">
                <img alt={this.props.item.img} src={this.props.item.img} />
                <div className="device">
                    <div>
                        <h2>{this.props.item.subtitle}</h2>
                        <h1>{this.props.item.title}</h1>
                        <p>{this.props.item.text}</p>
                    </div>
                    <button>
                        <p>FIND OUT MORE</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Item;
