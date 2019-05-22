import React from 'react';
import logo from '../Logo/logo-text-dark.svg';
import logoico from '../Logo/logo-dark.svg';

const Logo = () => {
    return ( 
        <div>
        <a href="https://condorlabs.io/" target="_blank"><img src={logoico} alt="logoico" width="46" height="37" rel="noopener noreferrer"/> <img alt="logo" src={logo} width="140" height="37"/> </a>
        </div>
     );
}
 
export default Logo;