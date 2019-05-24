import React from 'react';
import './Photo.css'

const Photo = (props) => {
    //verificamos si se estan pasando bien los datos al componente Photo por medio del console.log
    console.log(props.pictures);

    //realizamos un destructuring para verificar en caso no exita la imagen nos retorne null
    const { images, link,  username} = props.pictures;
    
    if (!images) return null;
    return (

        //este li general se encargara de pintar los datos o imgenes en patanlla
        <li>
            <a href={link} className="diamond">

                <img className="content" src={images.standard_resolution.url} alt={username} width="390" height="640" />

            </a>
        </li>

    );
}

export default Photo;