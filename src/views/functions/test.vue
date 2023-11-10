<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description =
    'Get the height in pixel of a given query selector.<br>Pay attention: the selector must point to only one DOM element, otherwise the function will return the height of the first matching element.<br>';
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
            code="const getElementHeight = (querySelector: string): number => {
    const el: HTMLElement | null = document.querySelector(querySelector);

    if(!el){
        return 0;
    }

    let elHeight = el.offsetHeight;
    
    ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'].forEach(property => {
        elHeight += parseInt(window.getComputedStyle(el).getPropertyValue(property));
    });
    
    return elHeight;
};"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const getElementHeight = (querySelector) => {
    const el = document.querySelector(querySelector);

    if(!el){
        return 0;
    }

    let elHeight = el.offsetHeight;
    
    ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'].forEach(property => {
        elHeight += parseInt(window.getComputedStyle(el).getPropertyValue(property));
    });
    
    return elHeight;
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
