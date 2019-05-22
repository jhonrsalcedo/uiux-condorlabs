import React from 'react';
import logo from '../Logo/logo-text-dark.svg';
import logoico from '../Logo/logo-dark.svg';

const Logo = () => {
    return ( 
        <div>
        <a href="https://condorlabs.io/" target="_blank" rel="noopener noreferrer"><img src={logoico} alt="logoico" width="46" height="37" /> <img alt="logo" src={logo} width="140" height="37"/> </a>
        </div>
     );
}
 
export default Logo;