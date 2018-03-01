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
      foundedDate:  ''
    };
  }

  componentWillMount() {
    fetch(`/api/${this.state.id}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          posts: body[0].posts,
          foundedDate: body[0].founded
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
          <Founded foundedDate={this.state.foundedDate} />
      </div>
    )
  }
}


export default Updates