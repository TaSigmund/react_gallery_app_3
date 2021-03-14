import React from 'react';
import Nav from './Nav'
import PhotoContainer from './PhotoContainer';
import SearchBar from './SearchBar'
import NotFound from './NotFound'
class Search extends React.Component {

    render() {
      return (
        <React.Fragment>
          <SearchBar history={this.props.history} startSearch={this.props.startSearch}/>
          <Nav onSearch={this.props.onSearch} startSearch={this.props.startSearch}/>
          <PhotoContainer loading={this.props.loading} photos={this.props.photos} history={this.props.history} startSearch={this.props.startSearch}/>
        </React.Fragment>
      )
    }
  }

  export default Search 