<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'Returns a duplicate free array';
</script>

<template>
    <div class="space-y-8">
        <h1>onlyUnique</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description" />
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="" />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const onlyUnique = (value, index, self) => self.indexOf(value) === index;"
        />

        <FunctionCode title="Example" lang="javascript" code="" />
    </div>
</template>
