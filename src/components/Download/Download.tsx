import {FC} from 'react';
import Button from '../../typography/Button';

interface DownloadProps {
    filename: string;
    content: string;
    label?: string;
    className?: string;
}

const ICON = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
        />
    </svg>
);

const Download: FC<DownloadProps> = ({label, filename, content, className}) => {
    function download() {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    return <Button label={label || 'Download'} icon={ICON} onClick={download} className={className || ''} />;
};

export default Download;
