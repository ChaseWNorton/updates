import React from 'react';
import Radium from 'radium';
import TimelineLeft from './timelineLeft.jsx';
import TimelineRight from './timelineRight.jsx';
import Founded from './timelineFounded.jsx';


@Radium
class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.ID,
      posts: [],
      foundedDate:  'January 15th 2018',
    };
  }

  componentWillMount() {
    fetch(`/api/${this.state.id}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          posts: body.posts,
          foundedDate: body.founded
        })
      })
  }


  render() {
    return(
      <div className="update-container">
        {this.state.posts.map(ele => {
            if (ele.postId % 2 === 0) {
              return <TimelineLeft key={ele.postId} title={ele.title} date={ele.date} blog={ele.article} />;
            } else {
              return <TimelineRight key={ele.postId} title={ele.title} date={ele.date} blog={ele.article} />;
            }
        })}
        <div>{this.state.test}</div>
          <Founded foundedDate={this.state.foundedDate} />
      </div>
    )
  }
}


export default Updates