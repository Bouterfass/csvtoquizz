import React from 'react';


const BigTitle = ({ children }: any) => {

    return (
        <div className='py-4 w-full flex justify-center font-bold text-4xl text-blue dark:text-blueDk'>
            {children}
        </div>

    )
}

export default BigTitle;