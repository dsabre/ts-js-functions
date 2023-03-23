import {FC} from 'react';

interface TitleProps {
    title: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

const Title: FC<TitleProps> = ({title, variant, className}) => (
    <>
        {(variant || 'h1') === 'h1' && <h1 className={`text-3xl font-bold ${className}`}>{title}</h1>}
        {variant === 'h2' && <h2 className={`text-xl font-bold ${className}`}>{title}</h2>}
        {variant === 'h3' && <h3 className={`text-lg font-bold ${className}`}>{title}</h3>}
        {variant === 'h4' && <h4 className={`font-bold ${className}`}>{title}</h4>}
        {variant === 'h5' && <h5 className={`font-bold ${className}`}>{title}</h5>}
        {variant === 'h6' && <h6 className={`font-bold ${className}`}>{title}</h6>}
    </>
);

export default Title;
