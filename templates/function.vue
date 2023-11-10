<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'DESCRIPTION';
</script>

<template>
    <div class="space-y-8">
        <h1>[[COMPONENT_NAME]]</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description"/>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="TYPESCRIPT_CODE" />

        <FunctionCode title="Javascript" lang="javascript" code="JAVASCRIPT_CODE" />
        
        <FunctionCode title="Example" lang="javascript" code="EXAMPLE_CODE" />
    </div>
</template>
