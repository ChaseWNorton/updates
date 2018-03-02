import React from 'react';
import TimelineLeft from './timelineLeft.jsx';
import TimelineRight from './timelineRight.jsx';
import Founded from './timelineFounded.jsx';


class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.ID,
      posts: [],
      foundedDate:  '',
      color: ['#96C7FF', '#FFCBA9', '#05F2BA'],
    };
    this.timelineClick = this.timelineClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/${this.state.id}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          posts: body.posts,
          foundedDate: body.founded,
        })
    })
  }

  randomColor() {
    return this.state.color[Math.floor(Math.random() * 3)];
  }

  timelineClick () {
    alert('HEY!')
  }

  render() {
    return(
      <div className="update-container">
        {this.state.posts.map(ele => {
            if (ele.postId % 2 === 0) {
              return <TimelineLeft key={ele.postId} comments={ele.comments} likes={ele.likes} onClick={this.timelineClick} background={this.randomColor()} title={ele.title} date={ele.date} blog={ele.summary} />;
            } else {
              return <TimelineRight key={ele.postId} comments={ele.comments} likes={ele.likes} onClick={this.timelineClick} background={this.randomColor()} title={ele.title} date={ele.date} blog={ele.summary} />;
            }
        })}
          <Founded foundedDate={this.state.foundedDate} />
      </div>
    )
  }
}


export default Updates