<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'Function that takes two arguments - filename and content. It creates a new &lt;a&gt; element, sets its href attribute to a data URL that contains the given content as plain text, and sets its download attribute to the given filename. It then adds this element to the DOM, triggers a click on the element to download the file, and finally removes the element from the DOM.';
</script>

<template>
    <div class="space-y-8">
        <h1>downloadFile</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify" v-html="description"/>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const downloadFile = (filename: string, content: string): void => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};"/>

        <FunctionCode title="Javascript" lang="javascript" code="const downloadFile = (filename, content) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};"/>

        <FunctionCode title="Example" lang="javascript" code="import { downloadFile } from './downloadFile';

const myFilename = 'myFile.txt';
const myText = 'This is some sample text to be written to the file.';

downloadFile(myFilename, myText);" />
    </div>
</template>
