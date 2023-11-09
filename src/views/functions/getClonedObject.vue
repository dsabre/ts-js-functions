<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>getClonedObject</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                It creates a new object or array by cloning the given object using the JSON stringify and parse methods.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const getClonedObject = (object: object | unknown[]): object | unknown[] => JSON.parse(JSON.stringify(object));" />

        <FunctionCode title="Javascript" lang="javascript" code="const getClonedObject = (object) => JSON.parse(JSON.stringify(object));" />
    </div>
</template>
