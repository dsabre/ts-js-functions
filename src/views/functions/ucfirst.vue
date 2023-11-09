<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>ucfirst</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Capitalize the first letter of a string.
            </p>
        </div>

        <FunctionCode title="Typescript">
            const ucfirst = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
        </FunctionCode>

        <FunctionCode title="Javascript">
            const ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
        </FunctionCode>
    </div>
</template>
