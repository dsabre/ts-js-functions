import {FC, useEffect, useRef} from 'react';
import 'highlight.js/styles/stackoverflow-dark.css';
import hljs from 'highlight.js/lib/common';
import {useLocation} from 'react-router-dom';

interface CodeProps {
    code: string;
    highlightClass?: string;
}

const Code: FC<CodeProps> = ({code, highlightClass}) => {
    const location = useLocation();
    const codeElement = useRef<HTMLElement>(null);

    useEffect(() => {
        if (code && codeElement.current instanceof HTMLElement) {
            hljs.highlightElement(codeElement.current);
        }
    }, [location, code, codeElement]);

    return (
        <pre>
            <code ref={codeElement} className={`rounded text-xs sm:text-sm ${highlightClass}`}>
                {code}
            </code>
        </pre>
    );
};

export default Code;
