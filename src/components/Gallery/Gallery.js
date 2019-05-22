import React, { Component } from 'react';
import Photo from '../Photo/Photo';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="row">
               {/*  {Object.keys(this.props.galleryapi).map(key =>(
                    <Photo
                    key={key}
                        info={this.props.galleryapi[key]}
                    />
                ))} */}
            <Photo />
            </div>
         );
    }
}
 
export default Gallery;