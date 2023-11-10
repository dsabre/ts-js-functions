<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>[[COMPONENT_NAME]]</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                DESCRIPTION
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="TYPESCRIPT_CODE" />

        <FunctionCode title="Javascript" lang="javascript" code="JAVASCRIPT_CODE" />
        
        <FunctionCode title="Example" lang="javascript" code="EXAMPLE_CODE" />
    </div>
</template>
