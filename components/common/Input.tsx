import * as React from 'react';

export interface ButtonProps {
    lg?: boolean
    IconComponent?: React.FC<IIconProps>;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({children, lg, IconComponent, ...props}) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    let className = 'inline-flex items-center gap-2 rounded-md border-2 placeholder:text-gray-500 p-2 focus-within:border-blue-400 ';
    className += props.disabled? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed ' : 'border-blue-200 text-gray-700 ' 
    className += lg ? 'px-8 ' : '';
    return (<div className={className}>
        {IconComponent && <IconComponent width={24} height={24} fill='#4A5568'/>}
        <input ref={inputRef} className="disabled:cursor-not-allowed focus:outline-none disabled:bg-transparent" {...props}/>
        </div>)
};

export default Button