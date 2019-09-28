import React,{Component} from 'react'

class SearchBar extends Component{
    state={
        term:''
    }
    render() {
       
        return(
         <div className="search-bar">
            <input
            placeholder="Search here........"
            value={this.state.term} 
            onChange={(event)=>{this.onInputChange(event.target.value)}}/>
        </div>
        );
    }
    onInputChange(term) {
        console.log(term)
        this.setState({term:term})
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;

  