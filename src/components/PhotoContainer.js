//dependencies
import React from 'react';
import Photo from './Photo';

/*** 
 PhotoContainer - Holds an unordered list an fills it with Photo components
****/
class PhotoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            photoObjects: []
        }
    }  
  
    /*turns the json data into better usable photo objects that only hold the necessary data */
    createPhotoObjects = (pictures) => {
        let photoObjects = [];
        pictures.photos.photo.map(photo => 
          photoObjects.push({
            key: `${photo.id}`,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            title: `${photo.title}`
          }
          ))
          this.setState({photoObjects: photoObjects})
        }

    /*triggers photo updates when the user navigates to a new search request*/
    componentDidUpdate(prevProps) {
        // for on page navigation
        if (this.props.photos !== prevProps.photos){
                this.createPhotoObjects(this.props.photos);
        // for browser navigation
        } else if (this.props.history.action === 'POP')
        {   this.props.history.replace();
            this.props.startSearch(this.props.history.location.pathname.slice(8))}
    }
        
    render() {    
        return(
            <React.Fragment>
                <div className="photo-container">
                {
                /*** LOADING INDICATOR ***/
                (this.props.loading)?
                <h2>Loading...</h2>:
                <React.Fragment></React.Fragment>
                }
                {
                /*** NOT FOUND MESSAGE ***/
                (this.state.photoObjects.length === 0 && this.props.loading === false)?
                <React.Fragment>
                <h2>No results found</h2>
                <p> That search did not return any results, please try again.</p>
                </React.Fragment>:
                <React.Fragment></React.Fragment>
                }
                {
                /*** RESULTS***/
                (this.state.photoObjects.length > 0 && this.props.loading === false)?
                <React.Fragment>
                <h2>Results for {this.props.history.location.pathname.slice(8)}</h2>
                <ul>
                    {this.state.photoObjects.map(photo => <Photo key= {photo.key} data={photo}/>)}
                </ul>
                </React.Fragment>:
                <React.Fragment></React.Fragment>
                }
                </div>
            </React.Fragment>
        )
        
    }
  }

  export default PhotoContainer