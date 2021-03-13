import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
class Home extends React.Component {


  componentDidMount(){
    console.log("Home")
  }  
  render() {
      return (
        <React.Fragment>
          <SearchBar history={this.props.history} onSearch={this.props.onSearch} startSearch={this.props.startSearch}/>
          <Nav onSearch={this.props.onSearch} startSearch={this.props.startSearch}/>
        </React.Fragment>
      )
    }
  }

  export default Home 