import React from 'react';
import Radium, { Style } from 'radium';

const TimelineRight = props => {
  let hove = {
    base: {
      ":hover": {
        backgroundColor: props.background,
        boxShadow: `0.6rem 0 0 ${props.background}, -0.6rem 0 0 ${props.background}`,
      }
    },
  };

  return(
  <section className="timeline-container" style={styles.timeline_container}>
    <div className="timeline-display-left"/>
    <div className="line-holder" style={styles.line_holder}>
      <div key={props.date} style={styles.timeline_right_line} className="timeline-right-line"/>
      <div style={[styles.timeline_display_right,{cursor: 'pointer'}]} onClick={() => {props.onClick(props.id)}} className="timeline-display-right">
        <h4 style={styles.timeline_display_right___h4}>{props.date}</h4>
        <h1 style={[styles.timeline_display_right___h1, hove.base]}>{props.title}</h1>
        <p style={styles.timeline_display_right___p}>{props.blog}... <span className="read-more" style={styles.read_more}>Read More</span></p>
        <div className="info-container" style={styles.info_container}>
          <div className="comments">{props.comments.length} comments</div>
          <div className="likes">{props.likes} likes</div>
        </div>
      </div>
    </div>
  </section>
  )
}

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
  "timeline_display_right": {
  "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "WebkitBoxPack": "justify",
    "MsFlexPack": "justify",
    "justifyContent": "space-between",
    "WebkitBoxAlign": "start",
    "MsFlexAlign": "start",
    "alignItems": "flex-start",
    "paddingLeft": "78px",
    "position": "relative",
    "fontFamily": "'Cooper Lt BT'",
    "fontWeight": "100",
    "color": "#282828",
    "fontStyle": "normal"
},
  "timeline_right_line": {
  "content": "''",
    "position": "absolute",
    "height": "1px",
    "width": "45px",
    "backgroundColor": "#b1aba5",
    "top": "9px"
},
  "timeline_display_right___h1": {
  "marginTop": "2px",
    "marginBottom": "60px",
    "fontSize": "32px"
},
  "timeline_display_right___h1_hover": {
  "background": "#05F2BA",
    "boxShadow": "0.6rem 0 0 #05F2BA, -0.6rem 0 0 #05F2BA"
},
  "timeline_display_right___h4": {
  "marginTop": "0px"
},
  "timeline_display_right___p": {
  "fontFamily": "'Maison Neue'",
    "fontWeight": "100",
    "fontStyle": "normal",
    "fontSize": "1.1rem",
    "lineHeight": "1.6rem",
    "textAlign": "left"
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
  "info_container": {
  "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "150px"
},

}


export default Radium(TimelineRight);