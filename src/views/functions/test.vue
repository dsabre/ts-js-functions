<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'Get the height in pixel of a given query selector.
Pay attention: the selector must point to only one DOM element, otherwise the function will return the height of the first matching element.';
</script>

<template>
    <div class="space-y-8">
        <h1>test</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description" />
        </div>

        <FunctionCode
            title="Typescript"
            lang="typescript"
            code="const downloadFile = (filename: string, content: string): void => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const downloadFile = (filename, content) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
};"
        />

        <FunctionCode
            title="Example"
            lang="javascript"
            code="import { downloadFile } from './downloadFile';

const myFilename = 'myFile.txt';
const myText = 'This is some sample text to be written to the file.';

downloadFile(myFilename, myText);"
        />
    </div>
</template>
