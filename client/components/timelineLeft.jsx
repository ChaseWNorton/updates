import React from 'react';

const TimelineLeft = props => (
  <div className="timeline-display-left">
    <div className="timeline-left-line"></div>
    <h4>{props.date}</h4>
    <h1>{props.title}</h1>
    <p>{props.blog}</p>
  </div>
)

export default TimelineLeft;