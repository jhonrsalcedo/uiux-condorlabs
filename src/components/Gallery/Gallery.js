import React, { Component } from 'react';
import Photo from '../Photo/Photo';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className=" ">
                <p>desde Gallery</p>
                <Photo />
            </div>
         );
    }
}
 
export default Gallery;