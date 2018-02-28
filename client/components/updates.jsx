import React from 'react';
import Radium from 'radium';
import TimelineLeft from './timelineLeft.jsx';
import TimelineRight from './timelineRight.jsx';
import Founded from './timelineFounded.jsx';

@Radium
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 1,
        article: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'February 22, 2018',
        title: 'Week One Up',},
        {id: 2,
          article: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          date: 'February 22, 2018',
          title: 'Week One Up',},
      ],
      foundedDate:  'January 15th 2018',
    };
  }



  render() {
    return(
      <div className="update-container">
        {this.state.posts.map(ele => {
            if (ele.id % 2 !== 0) {
              return <TimelineLeft key={ele.id} title={ele.title} date={ele.date} blog={ele.summary} />;
            } else {
              return <TimelineRight key={ele.id} title={ele.title} date={ele.date} blog={ele.summary} />;
            }
        })}
          <Founded foundedDate={this.state.foundedDate} />
      </div>
    )
  }
}


export default Homepage