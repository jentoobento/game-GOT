import React from 'react';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    cityClick = event => {
        console.log("city clicked", event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={this.cityClick} value="city 1">city 1</button></td>
                            <td><button onClick={this.cityClick} value="city 2">city 2</button></td>
                            <td><button onClick={this.cityClick} value="city 3">city 3</button></td>
                            <td><button onClick={this.cityClick} value="city 4">city 4</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value="city 5">city 5</button></td>
                            <td><button onClick={this.cityClick} value="city 6">city 6</button></td>
                            <td><button onClick={this.cityClick} value="city 7">city 7</button></td>
                            <td><button onClick={this.cityClick} value="city 8">city 8</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value="city 9">city 9</button></td>
                            <td><button onClick={this.cityClick} value="city 10">city 10</button></td>
                            <td><button onClick={this.cityClick} value="city 11">city 11</button></td>
                            <td><button onClick={this.cityClick} value="city 12">city 12</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value="city 13">city 13</button></td>
                            <td><button onClick={this.cityClick} value="city 14">city 14</button></td>
                            <td><button onClick={this.cityClick} value="city 15">city 15</button></td>
                            <td><button onClick={this.cityClick} value="city 16">city 16</button></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Map;