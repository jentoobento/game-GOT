import React from 'react';

class TopBar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12" style={{"backgroundColor":"azure"}}>
                        <h2>character name</h2>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopBar;