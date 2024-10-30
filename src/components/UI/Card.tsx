import React from 'react';

interface CardProps<T> {
    data: T;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Card = <T,>({ data, children, onClick }: CardProps<T>) => {
    return <div 
    className='text-md p-4 text-lightGrayD rounded-md w-[12em] h-[12em] border-2 border-solid border-lightGrayD bg-blackL cursor-pointer dark:hover:bg-black dark:hover:border-lightWhite dark:hover:text-lightWhite dark:shadow-black-300'
    onClick={onClick}
    >
        <p className='text-md font-extrabold text-lightGrayL'>{(data as any).title}</p>
        {children && <>{children}</>}
    </div>
}

export default Card;