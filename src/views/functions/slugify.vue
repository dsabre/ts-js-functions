<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = '';
</script>

<template>
    <div class="space-y-8">
        <h1>slugify</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description" />
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="" />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="export const slugify = (str, separator = '-') =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, separator)
        .replace(/^-+|-+$/g, '');"
        />

        <FunctionCode title="Example" lang="javascript" code="" />
    </div>
</template>
