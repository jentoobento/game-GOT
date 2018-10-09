import React from 'react';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                {
                    name: "a",
                    men: 1,
                    gold: 1,
                    house: "stark"
                },
                {
                    name: "b",
                    men: 1,
                    gold: 1,
                    house: "stark"
                },
                {
                    name: "c",
                    men: 1,
                    gold: 1,
                    house: "stark"
                }
            ]
        }
    }

    cityClick = event => {
        console.log("city clicked", event.target.value)
    }

    render() {
        const cityList = this.state.cities.map(item => {
            return (
                <div key={item.name} className="col-md-4">
                    <h3>{item.name}</h3>
                    <ul>
                        <li>house: {item.house}</li>
                        <li>men: {item.men}</li>
                        <li>gold: {item.gold}</li>
                    </ul>
                    <button onClick={this.cityClick} value={item.name}>More Info</button>
                </div>
            )

        })
        return (
            <React.Fragment>
                <div className="col-md-9 map-area">
                    {cityList}
                </div>
            </React.Fragment>
        )
    }
}

export default Map;