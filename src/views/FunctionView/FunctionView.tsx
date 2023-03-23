import {FC, ReactNode} from 'react';
import Code from '../../components/Code';
import Download from '../../components/Download';
import Copy from '../../components/Copy';
import {useLocation} from 'react-router-dom';
import Title from '../../typography/Title';

interface FunctionViewProps {
    functionCodeTs?: string;
    functionCodeJs?: string;
    description?: string;
    example?: string;
}

const FunctionView: FC<FunctionViewProps> = ({functionCodeTs, functionCodeJs, description, example}) => {
    const location = useLocation();
    const functionName = location.pathname.split('/').reverse()[0].trim();
    const fullCodeTs = functionCodeTs
        ? `const ${functionName.trim()} = ${functionCodeTs ? functionCodeTs.trim() : ''}`.trim()
        : '';
    const fullCodeJs = functionCodeJs
        ? `const ${functionName.trim()} = ${functionCodeJs ? functionCodeJs.trim() : ''}`.trim()
        : '';

    return (
        <div className='space-y-4'>
            <div className='sm:flex sm:justify-between sm:items-center space-y-2 sm:space-y-0'>
                <Title title={functionName} />
                <div className='flex gap-1'>
                    {fullCodeTs && (
                        <Download
                            filename={`${functionName}.ts`}
                            content={fullCodeTs}
                            className='w-full sm:w-fit'
                            label='TS'
                        />
                    )}
                    {fullCodeJs && (
                        <Download
                            filename={`${functionName}.js`}
                            content={fullCodeJs}
                            className='w-full sm:w-fit'
                            label='JS'
                        />
                    )}
                </div>
            </div>

            {description && (
                <div>
                    <Title title='Description' variant='h2' />
                    <div dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
            )}

            {fullCodeTs && (
                <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                        <Title title='Typescript' variant='h2' />
                        <Copy code={fullCodeTs} toastMsg={`Typescript ${functionName} copied to clipboard`} />
                    </div>
                    <Code code={fullCodeTs} highlightClass='language-typescript' />
                </div>
            )}

            {fullCodeJs && (
                <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                        <Title title='Javascript' variant='h2' />
                        <Copy code={fullCodeJs} toastMsg={`Javascript ${functionName} copied to clipboard`} />
                    </div>
                    <Code code={fullCodeJs} highlightClass='language-javascript' />
                </div>
            )}

            {example && (
                <div className='space-y-1'>
                    <Title title='Example' variant='h2' />
                    <Code code={example} highlightClass='language-javascript' />
                </div>
            )}
        </div>
    );
};

export default FunctionView;
