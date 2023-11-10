<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>ucfirst</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify">
                Capitalize the first letter of a string.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const ucfirst = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);" />

        <FunctionCode title="Javascript" lang="javascript" code="const ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);" />
    </div>
</template>
