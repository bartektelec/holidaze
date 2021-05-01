import * as React from 'react';

export interface IconProps {
    alt: string,
    src: any
}

const Icon: React.FC<IconProps> = ({alt, src,...props}) => {
    return (<img alt={alt} src={src} {...props}/>)
};

export default Icon