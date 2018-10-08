import React, { Component } from 'react';
import TopBar from './BoardComponents/TopBar';
import Map from './BoardComponents/Map';

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
                    <div className="col-md-9">
                        <Map/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Board;