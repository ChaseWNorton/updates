import React from 'react';
import Radium from 'radium';

@Radium
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      blog: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: 'February 22',
      title: 'Week One Up',
      foundedDate:  'January 15th 2018',


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
          <div className="timeline-display-left">
          <div className="timeline-left-line"></div>
          <h4>{this.state.date}</h4>
          <h1>{this.state.title}</h1>
          <p>{this.state.blog}</p>
        </div>
          <div className="timeline-display-right"></div>
        </section>
        <section className="timeline-container">
          <div className="timeline-display-left"></div>
          <div className="timeline-display-right">
            <div className="timeline-right-line"></div>
            <h4>{this.state.date}</h4>
            <h1>{this.state.title}</h1>
            <p>{this.state.blog}</p>
          </div>
        </section>
        <section className="timeline-founded">
          <div className="founded">
            <h4>{this.state.foundedDate}</h4>
            <h2>Project launched</h2>
          </div>
        </section>
      </div>
    )
  }
}

var styles = {
  base: {
    ':after': {
      content: 'Yo'
    },
  },
};

export default Homepage