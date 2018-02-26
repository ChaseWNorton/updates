import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Line, TextPath } from 'react-konva';
const Konva = require('konva');


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      blog: 'Hellow World, this is my blog post about crazy cats!',
      date: 'February 22',
      title: 'Week One Up'
    };
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    alert('Going to the new page!')
  }

  render() {
    return(
      <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Text
              x={window.innerWidth/2 - 20}
              y={20}
              width={200}
              text={this.state.date}
              onClick={this.onClick}
            />
          <Text
            x={window.innerWidth/2 - 20}
            y={50}
            width={100}
            text={this.state.title}
            onClick={this.onClick}
          />
          <Text
            x={window.innerWidth/2 - 20}
            y={75}
            width={100}
            lineHeight={1}
            text={this.state.blog}
            onClick={this.onClick}
          />
          <Line
            points={[window.innerWidth/2 + 110, 25, window.innerWidth/2 + 90, 25]}
            stroke={'black'}
            strokeWidth={0.6}

            />
          <Line
            points={[window.innerWidth/2 + 110, 25, window.innerWidth/2 + 110, 200]}
            stroke={'black'}
            strokeWidth={0.6}
            />
          <Text
            x={window.innerWidth/2 - 20}
            y={20}
            width={100}
            text={this.state.date}
            onClick={this.onClick}
          />
          <Text
            x={window.innerWidth/2 - 20}
            y={50}
            width={100}
            text={this.state.title}
            onClick={this.onClick}
          />
          <Text
            x={window.innerWidth/2 - 20}
            y={75}
            width={100}
            lineHeight={1}
            text={this.state.blog}
            onClick={this.onClick}
          />
        </Layer>
      </Stage>
    </div>

    )
  }
}

export default Homepage