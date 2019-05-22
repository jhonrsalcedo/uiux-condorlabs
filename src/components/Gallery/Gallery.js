import React, { Component } from 'react';
import './Gallery.css';
import Photo from '../Photo/Photo';

class Gallery extends Component {
    render() { 
        return ( 
//en este componente recorremos la api con map, es necesario utilizar las key para idententificar cada id del arreglo
            <div className="row m-bottom col-md-12">
                
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