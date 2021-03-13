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

    componentDidUpdate(prevProps) {

        // for on page navigation
        if (this.props.photos !== prevProps.photos) {
            this.createPhotoObjects(this.props.photos)
        }       
    }
        
            

    render() {    
        return(
            <React.Fragment>
                <div className="photo-container">
                <h2>Results for </h2>
                <ul>
                    {this.state.photoObjects.map(photo => <Photo key= {photo.key} data={photo}/>)}
                </ul>
                </div>
            </React.Fragment>

        )
        
    }
  }

  export default PhotoContainer