import React, {Component} from 'react';
import './App.css';

class Footer extends Component {

    render() {
        return (
            <div className="Footer" >
                <img alt="background" src={this.props.background} />
                <div className="text">
                    <div className="links">
                        <button>ABOUT</button>
                        <button>CONTACT</button>
                        <button>LEGAL</button>
                    </div>
                    <p className="copyright">Copyright © 2019 Site.com. All rights reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footer;
