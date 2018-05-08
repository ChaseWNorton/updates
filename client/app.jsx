import React from 'react'
import ReactDOM from 'react-dom'
import Updates from './components/updates.jsx'

ReactDOM.render(
  <Updates ID={window.location.pathname.slice(1, window.location.pathname.length - 1)} />, document.getElementById('updates')
);

//Renders solo now
