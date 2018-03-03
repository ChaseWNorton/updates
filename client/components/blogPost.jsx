import React from 'react';
import Radium from 'radium';
var FontAwesome = require('react-fontawesome');

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.post.postId,
      projectId: this.props.post.project,
      article: this.props.post.article,
      date: this.props.post.date,
      title: this.props.post.title,
      summary: this.props.post.summary,
      likes: this.props.post.likes,
      comments: this.props.post.comments,
      images: this.props.post.images,
      hover: false,
    }
    this.onHoverTipIn = this.onHoverTipIn.bind(this);
    this.onHoverTipOut = this.onHoverTipOut.bind(this);
  }

  onHoverTipIn() {
    this.setState({
      hover: true
    })
  }

  onHoverTipOut() {
    this.setState({
      hover: false
    })
  }

  render() {
    return(
      <div className="blog-post" style={styles.blogPost}>
        <header className="blog-header" style={styles.blogHeader}>
          <div className="header-topbar" style={styles.headerTopbar}>
            <div key={this.state.postId} className="tooltip" style={this.state.hover ? styles.toolTip : {display: 'none'}}>
              Anyone can view this update.
              All backers will be notified
            </div>
            <div key={this.state.project} className="updateNum" style={styles.updateNum}>
              <h5 className="updateNumber">Update #3</h5>
              <FontAwesome onMouseEnter={this.onHoverTipIn} onMouseOut={this.onHoverTipOut} name='exclamation-circle' style={styles.exclamationSym}/>
            </div>

            <div className="header-date" style={styles.headerDate}>
              <h5>{this.state.date}</h5>
            </div>
          </div>
          <div className="header-title" style={styles.headerTitle}>
            <h1 style={{marginTop: '0'}}>{this.state.title}</h1>
          </div>
          <div className="comment-like-box"></div>
        </header>
        <section className="blog-content">
          <div className="blog-article">
            <div className="image-section">
              <div className="top-image">{<img src={this.state.images[0]}></img>}</div>
            </div>
            {this.state.article}
          </div>
        </section>
        <div className="nav-buttons">
          <div className="prev-button"></div>
          <div className="forward-button"></div>
        </div>
        <div className="like-section">
          <div className="like-button"></div>
          <div className="liked-by"></div>
        </div>
        <div className="comment-section">
          <div className="comments-title"></div>
          <div className="comments-section"></div>
        </div>
      </div>
    )
  }
}

let styles = {
  blogPost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    maxWidth: '650px',
    margin: '0 auto',
  },
  blogHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    padding: '15px',
  },
    headerTopbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
      updateNum: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'darkcyan',
        fontSize: '20px',
        cursor: 'pointer',
        ':hover': {
          color: '#282828'
        }
      },
      headerDate: {
        fontSize: '16px',
        color: '#282828'
      },
    headerTitle: {
      alignSelf: 'flex-start'
    },
    exclamationSym: {
      color: 'cyangreen',
      padding: '5px',
      cursor: 'pointer',
      ':hover': {
        color: '#282828'
      }
    },
    toolTip: {
      display: 'flex',
      position: 'absolute',
      backgroundColor: '#282828',
      color: 'white',
      top: 0,
      left: 0,
      ':hover': {

      }
    }
};

export default Radium(BlogPost);