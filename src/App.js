import React ,{Component}from 'react';
import logo from './logo.svg';
import  _   from 'lodash'
import './App.css';
import SearchBar from './component/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './component/video_list'
import VideoDetail from './component/video_detail'
import Header from './component/header'
import Footer from './component/footer'

const API_KEY=process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component{
  constructor(props){
    super(props)

  this.state={
    videos:[],
    selectedVideo:null
  }
  this.videoSearch('icecream')

}

videoSearch(term){ 
  YTSearch({key:API_KEY,term :term},(videos)=>{
    this.setState(
      {videos:videos,
     selectedVideo:videos[0]});
    });
}

render() {
 
  const videoSearch = _.debounce((term)=>{this.videoSearch(term)},400);
  return (
    <div className="container-fluid">
      
      <div>
       <Header/>
       <SearchBar onSearchTermChange={videoSearch}/>
      </div>
         <div className="row">
              <div  className="col-md-8  coloumn1">
              
              <VideoDetail video={this.state.selectedVideo}/>  
              </div>
              <div className="col-md-4 coloumn2">
              <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
             </div>
         </div>
         <Footer/>
     </div>
    );
}


}


export default App;
