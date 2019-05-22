import React from 'react';
import './Photo.css'

const Photo = (props) => {
    console.log(props.info);
    const {images} = props.info;
    if(!images) return null;
    return ( 
        <div className="col-3 p-bottom">
            <a href={props.info.link}>
                      
                    <img src={props.info.images.thumbnail.url} alt={props.info.username} className="rounded-circle"/></a>
        </div>
     );
}
 
export default Photo;