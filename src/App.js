import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import './index.css';
import apiKey from './config.js';

/*** COMPONENTS ***/
import Home from './components/Home'
import Search from './components/Search';
import NotFound from './components/NotFound'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      photos: []
    }
}
/*** 
updateSearch = (searchFor) => {
  this.setState(prevState => ({
    searchTerm: prevState.searchTerm.concat(searchFor),
  }))
}
***/

performSearch = (searchTerm) => {
  
  /***
   * CREATE URL FOR FETCH
   ***/
  let tag= searchTerm
  let api_key = apiKey;
  let amountOfPictures = 24;
  let flickrAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tag}&per_page=${amountOfPictures}&page=1&format=json&nojsoncallback=1`;

  /***
   * FETCH DATA
   ***/
if (tag.length > 0){
   fetch(flickrAPI)
   .then(data => data.json())  
   .then(data => this.setState({photos: data}))
}}


  render(){
    const { match, location, history } = this.props;
    return(
          
      <React.Fragment>

{/*** ROUTES ***/}
        
          <Switch>
          <Route exact path="/" render={()=> <Redirect to="/home"/>}/>
          <Route exact path="/home" render={()=> <Home history={this.props.history} photos={this.state.photos} onSearch={this.updateSearch} startSearch={this.performSearch}/>}/>
          <Route path="/search/:search" render={()=> <Search history={this.props.history} photos={this.state.photos} onSearch={this.updateSearch} startSearch={this.performSearch}/>}/>
          <Route component={NotFound}/>
          </Switch>
       
      </React.Fragment>

    )
  }

}

const AppWithRouter = withRouter(App);

export default AppWithRouter