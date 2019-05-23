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
        <li className="diamond">
	<img src="http://lea.verou.me/book/kitten-web.jpg" />
</li>
        
     );
}
 
export default Photo;