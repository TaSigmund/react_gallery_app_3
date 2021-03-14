import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

class NotFound extends React.Component {
    render() {
      return (
        <React.Fragment>
        <SearchBar history={this.props.history} startSearch={this.props.startSearch}/>
        <Nav startSearch={this.props.startSearch}/>
        <h1>Page not found!</h1>
        </React.Fragment>
      )
    }
  }

  export default NotFound