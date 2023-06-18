import React from 'react';

const ContentWrapper = ({children}) => {
    return (
        <main className='mainpage'>
            {children}
        </main>
    );
};

export default ContentWrapper;