import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasEle: '',
      canvasColor: 'red',
    };
    this.updateCanvas = this.updateCanvas.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updateCanvas(this.canvasEle);
  }

  onClick() {
    this.setState({
      canvasColor: 'blue',
    }, () => {this.updateCanvas(this.canvasEle)});
  }

  updateCanvas(node) {
    const cx = node.getContext('2d');
    cx.beginPath();
    cx.moveTo(10, 90);
    cx.quadraticCurveTo(0, 0, 90, 90);
    cx.lineTo(60, 10);
    cx.closePath();
    cx.stroke();
  }

  render() {
    return(
      <div>
        <canvas ref={canvas => this.canvasEle = canvas} onClick={this.onClick} height="10000"></canvas>
      </div>

    )
  }
}

export default Homepage