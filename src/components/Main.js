import React, { useContext } from 'react';
import Boxes from './Boxes';
import { socialItems , statistics } from '../data/SocialmediaList.js';
import Overviews from './Overviews';
import { ThemeContext } from '../utils/context';

const Main = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className= {`main main--theme-${theme}`} >
            <div className='main__part-1'>
            {socialItems.map(({logo,id,followers,attribute,number,mark}) => 
            <Boxes 

                key = {`${logo.name}`}
                logo = {logo}
                id = {id}
                followers = {followers}
                attribute = {attribute}
                number = {number}
                mark = {mark}
             />)}
             </div>
             <h2 className={`header__title header__title--theme-${theme}`}> Overview - Today </h2>
             <div className = 'main__part-2'>
            {statistics.map(({bloc_1,bloc_2,logo}) =>  
            <Overviews 
                key = {`${logo.toString()}`}
                logo={logo}

                number1={bloc_1.number}
                mark1={bloc_1.icon}
                number2={bloc_1.rate}
                attribute1 = {bloc_1.attribute}

                number3={bloc_2.number}
                mark2={bloc_2.icon}
                number4={bloc_2.rate}
                attribute2 = {bloc_2.attribute}
                />
            )}
            </div>
        </div>
    );
};

export default Main;