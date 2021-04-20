import * as React from 'react';

export interface ButtonProps {
    secondary?: boolean,
    outline?: boolean,
    size?: 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({children, secondary, outline, size, ...props}) => {
    return (<button className='border-none bg-blue-500' {...props}>{children}</button>)
};

export default Button