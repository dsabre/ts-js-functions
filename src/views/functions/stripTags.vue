<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>stripTags</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify">
                Function that takes one argument - html. It creates a new &lt;div&gt; element, sets its innerHTML property to the given html, and returns the text content of the element, without any HTML tags.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const stripTags = (html: string): string => {
    const element = document.createElement('div');
    
    element.innerHTML = html;
    
    return element.textContent || element.innerText || '';
};" />
            
        <FunctionCode title="Javascript" lang="javascript" code="const stripTags = (html) => {
    const element = document.createElement('div');
    
    element.innerHTML = html;
    
    return element.textContent || element.innerText || '';
};" />

        <FunctionCode title="Example" lang="javascript" code="import { stripTags } from './stripTags';

const myHtml = '&amp;lt;p&amp;gt;This is some &amp;lt;b&amp;gt;sample&amp;lt;/b&amp;gt; &amp;lt;i&amp;gt;HTML&amp;lt;/i&amp;gt; text.&amp;lt;/p&amp;gt;';

const strippedText = stripTags(myHtml); // returns 'This is some sample HTML text.'" />
    </div>
</template>
