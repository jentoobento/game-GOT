import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <img className="playerImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIm0rv6I6q0f6Z5HhzNwgY-WqvqY_iPIOtLqZf13oeusl8uOJuUw"/>
                        <h4><b>Daenerys Targaryen</b></h4>
                        <h4><i>House of Targaryen</i></h4>
                    </div>
                    <div className="col-md-8">
                        <div className="col-md-4">
                            <h3>gold</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>men</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>reputation</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopBar;