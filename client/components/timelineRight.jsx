import React from 'react';

const TimelineRight = props => (
  <section className="timeline-container-right">
    <div className="timeline-display-left"/>
    <div className="timeline-display-right">
      <div className="timeline-right-line" />
      <h4>{props.date}</h4>
      <h1>{props.title}</h1>
      <p>{props.blog}</p>
    </div>
  </section>
)

export default TimelineRight;