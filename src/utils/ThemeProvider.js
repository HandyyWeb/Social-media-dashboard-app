import React, { useState } from 'react';
import { ThemeContext } from './context';


const ThemeProvider = ({children}) => {

    const [theme , setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }

    console.log(ThemeProvider)
    return (
        <ThemeContext.Provider value={{theme , toggleTheme}} >
            {children}
        </ThemeContext.Provider>
            
    );
};

export default ThemeProvider;