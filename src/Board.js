import React, { Component } from 'react';
import TopBar from './BoardComponents/TopBar';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <div className="row">
                    <div className="col-md-3" style={{"backgroundColor":"gray"}}>
                        <h2>commands</h2>
                    </div>
                    <div className="col-md-9" style={{"backgroundColor":"pink"}}>
                        <h2>map</h2>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Board;