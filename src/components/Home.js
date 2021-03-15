import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

/*** 
 WELCOME PAGE - NO SEARCH HAS YET BEEN EXECUTED. HOLDS THE COMPONENTS TO START A SEARCH
****/
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