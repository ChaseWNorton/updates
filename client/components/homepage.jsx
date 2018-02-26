import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      blog: 'Hellow World, this is my blog post about crazy cats!',
      date: 'February 22',
      title: 'Week One Up'
    };
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    alert('Going to the new page!')
  }

  render() {
    return(
      <div className="update-container">
        <section className="timeline-container">
          <div className="timeline-display-left"></div>
          <div className="timeline-display-right"></div>
        </section>
        <section className="timeline-founded">
          <div className="founded"></div>
        </section>
      </div>
    )
  }
}

export default Homepage