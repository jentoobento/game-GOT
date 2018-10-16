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
                <CommandBar />
                <Map />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Board;