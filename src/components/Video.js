import React, { Component } from 'react'
//Components
import VideoAudio from './VideoAudio'
import VideoLyrics from './VideoLyrics'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: 0}; // in seconds
  }
  render() {
    if(!this.props.video) {
      return <div>Loading...</div>
    }
    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
        </div>
        <div className="details">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
        <div>
          <VideoAudio url={url} currTime={this.state.currentTime}/>
        </div>
        <div>
          <VideoLyrics url={url} songTitle={this.props.video.snippet.title} currTime={this.state.currentTime}/>
        </div>
      </div>
    );
  }
}

export default Video;
