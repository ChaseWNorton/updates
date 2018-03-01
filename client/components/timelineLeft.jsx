import React from 'react';

const TimelineLeft = props => (
  <section  className="timeline-container">
    <div className="line-holder">
      <div style={{cursor: 'pointer'}} onClick={props.onClick} className="timeline-display-left">
        <div className="timeline-left-line" />
          <h4>{props.date}</h4>
          <h1>{props.title}</h1>
          <p>{props.blog}... <span className="read-more">Read More</span></p>
        </div>
    </div>
    <div className="timeline-display-right" />
  </section>
);

export default TimelineLeft;