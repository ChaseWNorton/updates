import React from 'react';
import Radium from 'radium';

const TimelineLeft = props => {
  let hove = {
    ":hover": {
      backgroundColor: props.background,
        boxShadow: `0.6rem 0 0 ${props.background}, -0.6rem 0 0 ${props.background}`,
    }
  };

  return(
    <section className="timeline-container" styles={styles.timeline_container}>
      <div className="line-holder" style={styles.line_holder}>
        <div style={[styles.timeline_display_left,{cursor: 'pointer'}]} onClick={() => props.onClick(props.id)} className="timeline-display-left" >
          <div className="timeline-left-line" style={styles.timeline_left_line}/>
          <h4 style={styles.timeline_display_left___h4}>{props.date}</h4>
          <h1 style={[styles.timeline_display_left___h1, hove]}>{props.title}</h1>
          <p style={styles.timeline_display_left___p}>{props.blog}... <span className="read-more" style={styles.read_more}>Read More</span></p>
          <div className="info-container" style={styles.info_container}>
            <div className="comments">{props.comments.length} comments</div>
            <div className="likes">{props.likes} likes</div>
          </div>
        </div>
      </div>
      <div className="timeline-display-right"/>
    </section>
  )
};

let styles = {
    "timeline_container": {
    "display": "flex",
      "WebkitBoxOrient": "horizontal",
      "WebkitBoxDirection": "normal",
      "MsFlexDirection": "row",
      "flexDirection": "row",
      "WebkitBoxAlign": "center",
      "MsFlexAlign": "center",
      "alignItems": "center",
      "WebkitBoxPack": "justify",
      "MsFlexPack": "justify",
      "justifyContent": "space-between",
      "width": "80%",
      "maxWidth": "1024px",
      "padding": "15px"
  },
    "timeline_display_left": {
    "display": "flex",
      "WebkitBoxOrient": "vertical",
      "WebkitBoxDirection": "normal",
      "MsFlexDirection": "column",
      "flexDirection": "column",
      "WebkitBoxPack": "justify",
      "MsFlexPack": "justify",
      "justifyContent": "space-between",
      "WebkitBoxAlign": "end",
      "MsFlexAlign": "end",
      "alignItems": "flex-end",
      "paddingRight": "78px",
      "position": "relative",
      "fontFamily": "'Cooper Lt BT'",
      "fontWeight": "100",
      "color": "#282828",
      "fontStyle": "normal"
  },
    "timeline_display_left___h1": {
    "marginTop": "2px",
      "marginBottom": "60px",
      "fontSize": "32px",
  },
    "timeline_display_left___h4": {
    "marginTop": "0px"
  },
    "timeline_display_left___p": {
    "fontFamily": "'Maison Neue'",
      "fontWeight": "100",
      "fontStyle": "normal",
      "fontSize": "1.1rem",
      "lineHeight": "1.6rem",
      "textAlign": "right"
  },
    "timeline_left_line": {
    "content": "''",
      "position": "absolute",
      "right": "0",
      "height": "1px",
      "width": "45px",
      "backgroundColor": "#b1aba5",
      "top": "10px"
  },
    "read_more": {
    "textDecoration": "underline"
  },
    "line_holder": {
    "display": "flex",
      "WebkitBoxOrient": "horizontal",
      "WebkitBoxDirection": "normal",
      "MsFlexDirection": "row",
      "flexDirection": "row",
      "width": "50%",
      "position": "relative"
  },
    "update_container__after": {
    "position": "absolute",
      "content": "''",
      "height": "100%",
      "backgroundColor": "#b1aba5",
      "left": "50%",
      "top": "0",
      "width": "1px",
      "overflow": "hidden",
      "zIndex": "1"
  },
    "info_container": {
    "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between",
      "width": "150px"
  },
};

export default Radium(TimelineLeft);