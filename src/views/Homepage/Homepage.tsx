import Download from '../../components/Download';
import Title from '../../typography/Title';
import Copy from '../../components/Copy';
import Code from '../../components/Code';
import {useEffect, useState} from 'react';
import routes from '../../routes';
import stripTags from '../../utils/stripTags';

const Homepage = () => {
    const [allFunctionsTs, setAllFunctionsTs] = useState<string>('');
    const [allFunctionsJs, setAllFunctionsJs] = useState<string>('');

    useEffect(() => {
        const ts = routes
            .map((l) => {
                const comment = stripTags(l.element.props.description);
                return `/*\n * ${comment}\n */\nconst ${l.path.split('/').reverse()[0].trim()} = ${
                    l.element.props.functionCodeTs
                }`;
            })
            .join('\n\n');
        const js = routes
            .map((l) => {
                const comment = stripTags(l.element.props.description);
                return `/*\n * ${comment}\n */\nconst ${l.path.split('/').reverse()[0].trim()} = ${
                    l.element.props.functionCodeJs
                }`;
            })
            .join('\n\n');

        setAllFunctionsTs(ts);
        setAllFunctionsJs(js);
    }, []);

    return (
        <div className='space-y-4'>
            <div className='sm:flex sm:justify-between sm:items-center space-y-2 sm:space-y-0'>
                <Title title='All functions' />
                <div className='flex gap-1'>
                    {allFunctionsTs && (
                        <Download
                            filename='all_functions.ts'
                            content={allFunctionsTs}
                            className='w-full sm:w-fit'
                            label='TS'
                        />
                    )}
                    {allFunctionsJs && (
                        <Download
                            filename='all_functions.js'
                            content={allFunctionsJs}
                            className='w-full sm:w-fit'
                            label='JS'
                        />
                    )}
                </div>
            </div>

            {allFunctionsTs && (
                <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                        <Title title='Typescript' variant='h2' />
                        <Copy code={allFunctionsTs} toastMsg='Typescript copied to clipboard' />
                    </div>
                    <Code code={allFunctionsTs} highlightClass='language-typescript' />
                </div>
            )}

            {allFunctionsJs && (
                <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                        <Title title='Javascript' variant='h2' />
                        <Copy code={allFunctionsJs} toastMsg='Javascript copied to clipboard' />
                    </div>
                    <Code code={allFunctionsJs} highlightClass='language-javascript' />
                </div>
            )}
        </div>
    );
};

export default Homepage;
