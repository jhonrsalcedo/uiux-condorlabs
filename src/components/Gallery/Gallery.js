import React, { Component } from 'react';
import './Gallery.css';
import Photo from '../Photo/Photo';

class Gallery extends Component {
    render() { 
        return ( 

            <div className="row m-bottom">
                
         {Object.keys(this.props.apiGallery).map(key =>(

             <Photo
             key={key}
                info={this.props.apiGallery[key]}
             />
         ))}
            </div>
         );
    }
}
 
export default Gallery;