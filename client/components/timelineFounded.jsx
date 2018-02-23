import React from 'react';
import Radium from 'radium';

const Founded = props => (
  <section className="timeline-founded" style={styles.timeline_founded}>
    <div className="founded" style={styles.founded}>
      <h4 style={styles.founded___h4}>{props.foundedDate}</h4>
      <h2 style={styles.founded___h2}>Project launched</h2>
    </div>
  </section>
);


let styles = {
  "timeline_founded": {
    "display": "flex",
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "MsFlexDirection": "row",
    "flexDirection": "row",
    "WebkitBoxAlign": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "MsFlexPack": "distribute",
    "justifyContent": "space-around",
    "width": "80%",
    "padding": "15px 15px 0 15px"
  },
  "founded": {
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "WebkitBoxAlign": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "width": "55%",
    "padding": "10px",
    "zIndex": "2",
    "color": "white",
    "backgroundColor": "darkslategrey",
    "fontFamily": "'Cooper Lt BT'"
  },
  "founded___h4": {
    "fontSize": "14px",
    "lineHeight": "20px"
  },
  "founded___h2": {
    "fontSize": "32px",
    "lineHeight": "35px",
    "marginTop": "0"
  }
}
export default Radium(Founded);