import React, { Component } from 'react';
import TopBar from './BoardComponents/TopBar';
import './Board.css';

import CommandBar from './BoardComponents/CommandBar';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <TopBar />
                <div className="row">
                    <div className="col-md-3 command-bar">
                        <h2>Commands</h2>
                        <CommandBar />
                    </div>
                    <div className="col-md-9" style={{ "backgroundColor": "pink" }}>
                        <h2>map</h2>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Board;