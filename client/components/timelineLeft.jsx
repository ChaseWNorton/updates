import React from 'react';
import Radium, { Style } from 'radium';

const TimelineLeft = props => {
  let styles = {
    base: {
      ":hover": {
        backgroundColor: props.background,
        boxShadow: `0.6rem 0 0 ${props.background}, -0.6rem 0 0 ${props.background}`,
      }
    }
  };
  return(
    <section className="timeline-container">
      <div className="line-holder">
        <div style={{cursor: 'pointer'}} onClick={props.onClick} className="timeline-display-left">
          <div className="timeline-left-line"/>
          <h4>{props.date}</h4>
          <h1 style={styles.base}>{props.title}</h1>
          <p>{props.blog}... <span className="read-more">Read More</span></p>
        </div>
      </div>
      <div className="timeline-display-right"/>
    </section>
  )
}

export default Radium(TimelineLeft);