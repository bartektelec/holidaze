import * as React from 'react';

export interface ButtonProps {
    secondary?: boolean,
    lg?: boolean,
    sm?: boolean,
    circle?: boolean
}

const Button: React.FC<ButtonProps> = ({children, secondary, lg,sm,circle, ...props}) => {
    let className = 'border-none flex gap-2 items-center rounded-md p-4 text-sm hover:shadow-sm disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-blue-300 ';
    className += secondary? 'bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 active:bg-gray-400 text-gray-700 ':'bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-800 text-white ';
    className += lg ? 'px-8 ' : '';
    className += sm ? 'py-1 px-2 ' : '';
    className += circle ? 'rounded-full w-6 h-6 justify-center' : '';
    return (<button className={className} {...props}>{children}</button>)
};

export default Button