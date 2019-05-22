import React from 'react';
import './Photo.css'

const Photo = (props) => {
    console.log(props.info);
    const {images} = props.info;
    if(!images) return null;
    return ( 
        <div className=" col-md-4 col-lg-3 col-xs-4 p-bottom text-center">
            <a href={props.info.link}>
                      
                    <img src={props.info.images.thumbnail.url} alt={props.info.username} className="rounded-circle "/></a>
        </div>
     );
}
 
export default Photo;