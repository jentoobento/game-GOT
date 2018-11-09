import React, { Component } from "react";
import anime from "animejs";


// documentation:
// http://animejs.com/documentation/


class Test extends Component {
  animateBox = (xCoord, yCoord) => {
    anime({
      targets: "div.box",
      translateX: [
        // value is distance, duration is milliseconds
        { value: xCoord, duration: 400 }
      ],
    //   translateY : [
    //       { value: yCoord, duration: 400}
    //   ],
      // change the speed curve
      easing: "easeInOutSine"
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Test</h1>
        <div>
          <div style={{display: "inline-block", padding: "20px", backgroundColor: 'bisque'}} onClick={() => this.animateBox(0)}>City 1</div>
          <div style={{display: "inline-block", marginLeft: "200px", padding: "20px", backgroundColor: 'tomato'}} onClick={() => this.animateBox(270)}>City 2</div>
          <div style={{display: "inline-block", marginLeft: "200px", padding: "20px", backgroundColor: 'bisque'}} onClick={() => this.animateBox(550)}>City 3</div>
        </div>
        <div
          className="box"
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
            margin: "4px",
            display: "inline-block",
            backgroundColor: "red"
          }}
        />
      </React.Fragment>
    );
  }
}

export default Test;
