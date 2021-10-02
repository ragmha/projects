import React, {Component} from 'react';

class SearchBar extends Component{ //giving Search bar all the functionality from React.component class
  constructor(props){
    super(props);

    this.state = {term : ''};
  }

  render(){
    return(
    <div className="search-bar">
      <a>Tube</a>
        <input
          value = {this.state.term}
          onChange={event=> this.onInputChange(event.target.value)}
          />
    </div>
  );
}
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
