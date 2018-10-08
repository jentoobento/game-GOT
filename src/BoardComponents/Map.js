import React from 'react';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:{
                a:{
                    men:1,
                    gold:1,
                    house:"stark"
                },
                b:{
                    men:1,
                    gold:1,
                    house:"stark"
                },
                c:{
                    men:1,
                    gold:1,
                    house:"stark"
                }
            }
        }
    }

    cityClick = event => {
        console.log("clicked", event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={this.cityClick} value={1}>city 1</button></td>
                            <td><button onClick={this.cityClick} value={2}>city 2</button></td>
                            <td><button onClick={this.cityClick} value={3}>city 3</button></td>
                            <td><button onClick={this.cityClick} value={4}>city 4</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value={5}>city 5</button></td>
                            <td><button onClick={this.cityClick} value={6}>city 6</button></td>
                            <td><button onClick={this.cityClick} value={7}>city 7</button></td>
                            <td><button onClick={this.cityClick} value={8}>city 8</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value={9}>city 9</button></td>
                            <td><button onClick={this.cityClick} value={10}>city 10</button></td>
                            <td><button onClick={this.cityClick} value={11}>city 11</button></td>
                            <td><button onClick={this.cityClick} value={12}>city 12</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.cityClick} value={13}>city 13</button></td>
                            <td><button onClick={this.cityClick} value={14}>city 14</button></td>
                            <td><button onClick={this.cityClick} value={15}>city 15</button></td>
                            <td><button onClick={this.cityClick} value={16}>city 16</button></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Map;