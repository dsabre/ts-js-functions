<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = '';
</script>

<template>
    <div class="space-y-8">
        <h1>removeMultipleSpaces</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description" />
        </div>

        <FunctionCode
            title="Typescript"
            lang="typescript"
            code="const removeMultipleSpaces = (inputString: string): string => inputString.replace(/[^\S\r\n]+/g, ' ');"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const removeMultipleSpaces = (inputString) => inputString.replace(/[^\S\r\n]+/g, ' ');"
        />

        <FunctionCode title="Example" lang="javascript" code="" />
    </div>
</template>
