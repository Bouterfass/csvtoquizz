import React from 'react';

interface CardProps<T> {
    data: T;
    children?: React.ReactNode;
}

const Card = <T,>({ data, children }: CardProps<T>) => {
    return <div className='text-sm p-4 rounded-md w-[10em] h-[10em] bg-black dark:shadow-black-500'>
        <span className='text-sm text-yellow dark:text-yellowDk'>{(data as any).title}</span>
        {children && <>{children}</>}
    </div>
}

export default Card;