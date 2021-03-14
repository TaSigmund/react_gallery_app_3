import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
class Home extends React.Component {

  render() {
      return (
        <React.Fragment>
          <SearchBar history={this.props.history} startSearch={this.props.startSearch}/>
          <Nav startSearch={this.props.startSearch}/>
        </React.Fragment>
      )
    }
  }

  export default Home 