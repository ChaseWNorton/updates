import React from 'react';

const TimelineRight = props => (
  <section className="timeline-container">
    <div className="timeline-display-left" />
    <div className="line-holder">
      <div className="timeline-right-line" />
      <div style={{cursor: 'pointer'}} onClick={props.onClick} className="timeline-display-right">
        <h4>{props.date}</h4>
        <h1>{props.title}</h1>
        <p>{props.blog}... <span className="read-more">Read More</span></p>
      </div>
    </div>
  </section>
)

export default TimelineRight;