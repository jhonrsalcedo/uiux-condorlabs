import React, { Component } from 'react';
import './Photo.css'

const Photo = (props) => {
    console.log(props.info);
    return ( 
        <div className="col-4">
            desde photo
        </div>
     );
}
 
export default Photo;