import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context';

const Button = () => {

const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <label className='switch'>
            <label className={`header__subtitle header__subtitle--position-2 header__subtitle--theme-${theme}`}>Dark Mode</label>
            <input type='checkbox' className='switch__checkbox' onClick={() => toggleTheme()}></input>
            <span className={`switch__slider switch__slider--round switch__slider--theme-${theme}`}></span>
        </label>
    );
};

export default Button;