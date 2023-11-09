<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>stripTags</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Function that takes one argument - html. It creates a new &lt;div&gt; element, sets its innerHTML property to the given html, and returns the text content of the element, without any HTML tags.
            </p>
        </div>

        <FunctionCode title="Typescript">
            const stripTags = (html: string): string => {
                const element = document.createElement('div');
                
                element.innerHTML = html;
                
                return element.textContent || element.innerText || '';
            };
        </FunctionCode>

        <FunctionCode title="Javascript">
            const stripTags = (html) => {
                const element = document.createElement('div');
                
                element.innerHTML = html;
                
                return element.textContent || element.innerText || '';
            };
        </FunctionCode>

        <FunctionCode title="Example">
            import { stripTags } from './stripTags';

            const myHtml = '<p>This is some <b>sample</b> <i>HTML</i> text.</p>';

            const strippedText = stripTags(myHtml); // returns 'This is some sample HTML text.'
        </FunctionCode>
    </div>
</template>
