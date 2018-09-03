import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Components
import Search from './components/Search'
import VideoList from './components/VideoList'
import Video from './components/Video'

const API_KEY = 'AIzaSyByTN619RMMTTHO88H-T0yL3R_biSSrhZo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('swift')
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <Search onSearchTermChange={videoSearch} />
          </div>
          <div className="col-sm-12 col-lg-8">
            <Video video={this.state.selectedVideo} />
          </div>
          <div className="col-sm-12 col-lg-4">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
