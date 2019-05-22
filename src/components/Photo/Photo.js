import React from 'react';
import './Photo.css'

const Photo = (props) => {
    //verificamos si se estan pasando bien los datos al componente Photo por medio del console.log
    console.log(props.info);

    //realizamos un destructuring para verificar en caso no exita la imagen nos retorne null
    const {images} = props.info;
    if(!images) return null;
    return ( 

        //este div general se encargara de pintar los datos en patanlla
        <div className="part col-md-4 col-lg-3 p-bottom text-center">
    <div className="losange">
      <div className="los1">
      <a href={props.info.link}>
                      
                      <img src={props.info.images.standard_resolution.url} alt={props.info.username} width="150" height="150"/></a>
        
      </div>
    </div>
</div>
        
     );
}
 
export default Photo;