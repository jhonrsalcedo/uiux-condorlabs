import React, { Component } from 'react';
import Photo from '../Photo/Photo';

class Gallery extends Component {
    render() { 
        return ( 

            <div className="row">
         {Object.keys(this.props.apiGallery).map(key =>(

             <Photo
                info={this.props.apiGallery[key]}
             />
         ))}
            </div>
         );
    }
}
 
export default Gallery;