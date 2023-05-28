import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context';

const Boxes = ({logo,id,followers,attribute,number,mark}) => {
    
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`box box--theme-${theme}`}>
            <div className={`box__overlay box__overlay-${logo.name}`}></div>
            <section className='box__content'>
                <div>
                    <img src={logo.value} alt= "A social network logo" />
                    <span className={`box__content-id box__content-id--theme-${theme}`}>{id}</span>
                </div>
                <p className={`box__content-number box__content-number--theme-${theme}`}>{followers}</p>
                <p className={`box__content-attribute box__content-attribute--theme-${theme}`}>{attribute}</p>
                <p className={`box__content-statistic box__content-statistic--color-${mark.name}`}> <img src={mark.value} alt="a fleche"></img> {number} Today </p>
            </section>
        </div>
    );
};

export default Boxes;