import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasEle: '',
      fillStyle: 'red',
    };
    this.updateCanvas = this.updateCanvas.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updateCanvas(this.canvasEle);
  }

  onClick() {
    this.setState({
      fillStyle: 'blue',
    }, () => {this.updateCanvas(this.canvasEle)});
  }

  updateCanvas(node) {
    const context = node.getContext('2d');
    context.fillStyle = this.state.fillStyle;
    context.fillRect(10, 10, 100, 50);
  }

  render() {
    return(
      <div>
        <canvas ref={canvas => this.canvasEle = canvas} onClick={this.onClick} width="1200" height="60"></canvas>
      </div>

    )
  }
}

export default Homepage