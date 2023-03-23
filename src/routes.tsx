import FunctionView from './views/FunctionView';

const routes = [
    {
        path: '/ucfirst',
        element: (
            <FunctionView
                description='Capitalize the first letter of a string.'
                functionCodeTs='(string: string): string => string.charAt(0).toUpperCase() + string.slice(1);'
                functionCodeJs='(string) => string.charAt(0).toUpperCase() + string.slice(1);'
            />
        )
    },
    {
        path: '/ifNaN',
        element: (
            <FunctionView
                description='Function that takes two arguments - number and defaultRet. It checks whether the given number is NaN (Not a Number) or not, and returns defaultRet if the number is indeed NaN.'
                functionCodeTs='(number: number, defaultRet: number = 0): number => isNaN(number) ? defaultRet : number;'
                functionCodeJs='(number, defaultRet = 0) => isNaN(number) ? defaultRet : number;'
                example={`import { ifNaN } from './ifNaN';

const myNumber = 5;
const myNaN = NaN;

const result1 = ifNaN(myNumber); // returns 5
const result2 = ifNaN(myNaN); // returns 0
const result3 = ifNaN(myNaN, 10); // returns 10
`}
            />
        )
    },
    {
        path: '/getElementHeight',
        element: (
            <FunctionView
                description={`Get the height in pixel of a given query selector.<br><span class="underline">Pay attention:</span> the selector must point to only one DOM element, otherwise the function will return the height of the first matching element.`}
                functionCodeTs={`(querySelector: string): number => {
    const el: HTMLElement | null = document.querySelector(querySelector);

    if(!el){
        return 0;
    }

    let elHeight = el.offsetHeight;
    
    ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'].forEach(property => {
        elHeight += parseInt(window.getComputedStyle(el).getPropertyValue(property));
    });
    
    return elHeight;
};`}
                functionCodeJs={`(querySelector) => {
    const el = document.querySelector(querySelector);

    if(!el){
        return 0;
    }

    let elHeight = el.offsetHeight;
    
    ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'].forEach(property => {
        elHeight += parseInt(window.getComputedStyle(el).getPropertyValue(property));
    });
    
    return elHeight;
};`}
            />
        )
    },
    {
        path: '/getObjectFromFormData',
        element: (
            <FunctionView
                description='Return an object from a submitted form data.'
                functionCodeTs={`(formData: any[]): object => {
    const object: any = {};
    formData.forEach((value: any, key: number) => object[key] = value);
    return object;
};`}
                functionCodeJs={`(formData) => {
    const object = {};
    formData.forEach((value, key) => object[key] = value);
    return object;
};`}
            />
        )
    },
    {
        path: '/downloadFile',
        element: (
            <FunctionView
                description='Function that takes two arguments - filename and content. It creates a new &amp;lt;a&amp;gt; element, sets its href attribute to a data URL that contains the given content as plain text, and sets its download attribute to the given filename. It then adds this element to the DOM, triggers a click on the element to download the file, and finally removes the element from the DOM.'
                functionCodeTs={`(filename: string, content: string): void => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};`}
                functionCodeJs={`(filename, content) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};`}
                example={`import { downloadFile } from './downloadFile';

const myFilename = 'myFile.txt';
const myText = 'This is some sample text to be written to the file.';

downloadFile(myFilename, myText);
`}
            />
        )
    },
    {
        path: '/makeId',
        element: (
            <FunctionView
                description='Generate and return a random string of a given length.'
                functionCodeTs={`(length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};`}
                functionCodeJs={`(length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};`}
            />
        )
    },
    {
        path: '/getClonedObject',
        element: (
            <FunctionView
                description='It creates a new object or array by cloning the given object using the JSON stringify and parse methods.'
                functionCodeTs='(object: object | unknown[]): object | unknown[] => JSON.parse(JSON.stringify(object));'
                functionCodeJs='(object) => JSON.parse(JSON.stringify(object));'
            />
        )
    },
    {
        path: '/stripTags',
        element: (
            <FunctionView
                description='Function that takes one argument - html. It creates a new &amp;lt;div&amp;gt; element, sets its innerHTML property to the given html, and returns the text content of the element, without any HTML tags.'
                functionCodeTs={`(html: string): string => {
    const element = document.createElement('div');
    
    element.innerHTML = html;
    
    return element.textContent || element.innerText || '';
};`}
                functionCodeJs={`(html) => {
    const element = document.createElement('div');
    
    element.innerHTML = html;
    
    return element.textContent || element.innerText || '';
};`}
                example={`import { stripTags } from './stripTags';

const myHtml = '<p>This is some <b>sample</b> <i>HTML</i> text.</p>';

const strippedText = stripTags(myHtml); // returns 'This is some sample HTML text.'
`}
            />
        )
    }
];

export default routes;
