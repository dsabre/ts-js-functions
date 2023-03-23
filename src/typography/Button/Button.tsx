import {FC, ReactNode, SyntheticEvent} from 'react';

interface ButtonProps {
    label: string;
    className?: string;
    icon?: ReactNode;
    onClick(event: SyntheticEvent): void;
    variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({label, icon, onClick, variant, className}) => (
    <>
        {(variant || 'primary') === 'primary' && (
            <button
                className={`flex justify-center items-center gap-1 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 bg-typescript rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${className}`}
                onClick={onClick}
            >
                {icon}
                {label.trim() !== '' && <span>{label}</span>}
            </button>
        )}

        {variant === 'secondary' && (
            <button
                className={`flex justify-center items-center gap-1 px-4 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 ${className}`}
                onClick={onClick}
            >
                {icon}
                {label.trim() !== '' && <span>{label}</span>}
            </button>
        )}
    </>
);

export default Button;
