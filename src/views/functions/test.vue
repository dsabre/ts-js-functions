<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>test</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white"></p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="" />

        <FunctionCode title="Javascript" lang="javascript" code="" />

        <FunctionCode title="Example" lang="javascript" code="" />
    </div>
</template>
