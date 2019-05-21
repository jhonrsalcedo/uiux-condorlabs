import React from 'react';
import logo from '../Logo/logo-text-dark.svg';
import logoico from '../Logo/logo-dark.svg';

const Logo = () => {
    return ( 
        <div>
        <img src={logoico} alt="logoico" width="46" height="37"/> <img alt="logo" src={logo} width="140" height="37"/> 
        </div>
     );
}
 
export default Logo;