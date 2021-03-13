import React from 'react';

/*** 
 Photo - Creates a single list item that holds a picture
****/
function Photo(props){
    return(
        <li><img src={props.data.url} alt={props.data.title}/></li>
    )
}

export default Photo