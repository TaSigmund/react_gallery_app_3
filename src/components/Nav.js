//dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

/*** 
 SEARCH BUTTONS FOR "OCEAN", "FOREST" AND "MOUNTAIN"
****/
function Nav(props){
    return(
        <React.Fragment>
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/ocean" onClick={()=>{props.startSearch('ocean')}}>ocean</NavLink></li>
          <li><NavLink to="/search/forest" onClick={()=>{props.startSearch('forest')}}>forest</NavLink></li>
          <li><NavLink to="/search/mountains" onClick={()=>{props.startSearch('mountains')}}>mountains</NavLink></li>
        </ul>
      </nav>
        </React.Fragment>
    )
}

export default Nav