import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';

const API_KEY = 'AIzaSyD3-k9zdsW_dkmaOWhpFYhsSUk1aQ7s78E';


class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('Blockchain')
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY,term:term}, (videos) => {

            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
            }); 

        });
    }
    
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);
        
        return(
            <div>
                <br />
                <SearchBar onSearch ={videoSearch} />
                <br />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}


// Take this and put it into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));