import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context';

const Overviews = ({attribute1,attribute2,logo,number1,number2,number3,number4,mark1,mark2}) => {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <div className='summary'>
            <div className={`summary_bloc summary_bloc--theme-${theme}`}>
                <span className={`summary_bloc-statistic summary_bloc-statistic--theme-${theme}`}>{attribute1}</span>
                <img className='summary_bloc-image' src = {logo} alt = 'A social network logo' />
                <br/>
                <span className={`summary_bloc-number summary_bloc-number--theme-${theme}`}>{number1}</span>
                <div className='summary_bloc-rate'><img src = {mark1.value} alt="a fleche logo"/><span className={`summary_bloc-rate--color-${mark1.name}`}>{number2}</span></div>
            </div>
            <div className={`summary_bloc summary_bloc--theme-${theme}`}>
                <span className ={`summary_bloc-statistic summary_bloc-statistic--theme-${theme}`}>{attribute2}</span>
                <img className='summary_bloc-image' src = {logo} alt ='A social network logo' />
                <br/>
                <span className={`summary_bloc-number summary_bloc-number--theme-${theme}`}>{number3}</span>
                <div className='summary_bloc-rate'><img src= {mark2.value} alt='a fleche logo' /><span className={`summary_bloc-rate--color-${mark2.name}`}>{number4}</span></div> 
            </div>
        </div>
    );
};

export default Overviews;