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
    cx.moveTo(50, 10);
    cx.lineTo(10, 70);
    cx.lineTo(90, 70);
    cx.fill();
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