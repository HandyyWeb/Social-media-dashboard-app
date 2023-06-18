import React, { useContext, useState } from 'react';
import Button from './Button';
import { ThemeContext } from '../utils/context';

const Header = () => {

    const {theme} = useContext(ThemeContext)
    const [LightTheme, setLightTheme] = useState(false)

    return (
        <header className={`wrapper wrapper--theme-${theme}`}>
            <div className='header'>
                <h2 className={`header__title header__title--position header__title--theme-${theme}`}>Social Media Dashboard</h2>
                <span className={`header__subtitle header__subtitle--position header__subtitle--theme-${theme}`}>Total followers : 23,004</span>
                <hr className='header__separator'/>
                <Button/>
            </div>
        </header>
    );
};

export default Header;