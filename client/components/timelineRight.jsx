import React from 'react';
import Radium, { Style } from 'radium';

const TimelineRight = props => {
  let styles = {
    base: {
      ":hover": {
        backgroundColor: props.background,
        boxShadow: `0.6rem 0 0 ${props.background}, -0.6rem 0 0 ${props.background}`,
      }
    },
  };

  return(
  <section className="timeline-container">
    <div className="timeline-display-left"/>
    {console.log(props.background)}
    <div className="line-holder">
      <div key={props.date} style={styles.display} className="timeline-right-line"/>
      <div style={{cursor: 'pointer'}} onClick={props.onClick} className="timeline-display-right">
        <h4>{props.date}</h4>
        <h1 style={styles.base}>{props.title}</h1>
        <p>{props.blog}... <span className="read-more">Read More</span></p>
        <div className="info-container">
          <div className="comments">{props.comments.length} comments</div>
          <div className="likes">{props.likes} likes</div>
        </div>
      </div>
    </div>
  </section>
  )
}


export default Radium(TimelineRight);