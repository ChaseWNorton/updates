import React from 'react';
import Radium from 'radium';
import TimelineLeft from './timelineLeft.jsx';
import TimelineRight from './timelineRight.jsx';
import Founded from './timelineFounded.jsx';

@Radium
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      blog: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: 'February 22',
      title: 'Week One Up',
      foundedDate:  'January 15th 2018',
    };
  }

  render() {
    return(
      <div className="update-container">
          <TimelineLeft title={this.state.title} date={this.state.date} blog={this.state.blog} />
          <TimelineRight title={this.state.title} date={this.state.date} blog={this.state.blog} />
          <Founded foundedDate={this.state.foundedDate} />
      </div>
    )
  }
}


export default Homepage