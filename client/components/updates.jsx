import React from 'react';
import TimelineLeft from './timelineLeft.jsx';
import TimelineRight from './timelineRight.jsx';
import Founded from './timelineFounded.jsx';
import BlogPost from './blogPost.jsx';
import Radium from 'radium';


class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.ID,
      posts: [],
      foundedDate:  '',
      color: ['#96C7FF', '#FFCBA9', '#05F2BA'],
      post: {},
      display: 'home',
      numOfPosts: 0,
    };
    this.timelineClick = this.timelineClick.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3003/api/${this.state.id}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          posts: body.posts,
          foundedDate: body.founded,
          numOfPosts: body.totalPosts,
        })
    })
  }

  randomColor() {
    return this.state.color[Math.floor(Math.random() * 3)];
  }

  timelineClick (id) {
    fetch(`http://localhost:3003/blogs/${id}`)
      .then(res => res.json())
      .then(body => {
        console.log(body);
        this.setState({
          display: 'blog',
          post: body
        })
      })
  }

  render() {

    return(
      this.state.display === 'home' ?
      <div className="update-container" style={styles.update_container}>
        {this.state.posts.map(ele => {
            if (ele.postId % 2 === 0) {
              return <TimelineLeft
                        key={ele.postId}
                        id={ele.postId}
                        comments={ele.comments}
                        likes={ele.likes}
                        onClick={this.timelineClick}
                        background={this.randomColor()}
                        title={ele.title}
                        date={ele.date}
                        blog={ele.summary} />;
            } else {
              return <TimelineRight
                        key={ele.postId}
                        id={ele.postId}
                        comments={ele.comments}
                        likes={ele.likes}
                        onClick={this.timelineClick}
                        background={this.randomColor()}
                        title={ele.title}
                        date={ele.date}
                        blog={ele.summary} />;
            }
        })}
          <Founded foundedDate={this.state.foundedDate} />
        <div className='center-line' style={styles.centerLine}></div>
      </div>

      :
        <BlogPost numOfPosts={this.state.numOfPosts} post={this.state.post} />
    )
  }
}

let styles = {
  "update_container": {
    "display": "flex",
    "position": "relative",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "WebkitBoxAlign": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "MsFlexPack": "distribute",
    "justifyContent": "space-around",
    "backgroundColor": "white",
    "color": "#282828",
    "marginBottom": "15px"
  },
  centerLine: {
    "position": "absolute",
    "content": "''",
    "height": "100%",
    "backgroundColor": "#b1aba5",
    "left": "50%",
    "top": "0",
    "width": "1px",
    "overflow": "hidden",
    "zIndex": "1"
  }
};


export default Updates