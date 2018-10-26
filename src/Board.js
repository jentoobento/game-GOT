import React, { Component } from 'react';
import './Board.css';

import TopBar from './BoardComponents/TopBar';
import CommandBar from './BoardComponents/CommandBar';
import Map from './BoardComponents/Map';
import Footer from './BoardComponents/Footer';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <TopBar />
                <div style={{"width":"100%"}}>
                    <CommandBar />
                    <Map />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Board;