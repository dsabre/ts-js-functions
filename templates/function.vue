<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = '__DESCRIPTION__';
</script>

<template>
    <div class="space-y-8">
        <h1>[[COMPONENT_NAME]]</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description"/>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="__TYPESCRIPT_CODE__" />

        <FunctionCode title="Javascript" lang="javascript" code="__JAVASCRIPT_CODE__" />
        
        <FunctionCode title="Example" lang="javascript" code="__EXAMPLE_CODE__" />
    </div>
</template>
