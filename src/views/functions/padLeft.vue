<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'Left pad a string to a certain length with another string.';
</script>

<template>
    <div class="space-y-8">
        <h1>padLeft</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify" v-html="description" />
        </div>

        <FunctionCode
            title="Typescript"
            lang="typescript"
            code="const padLeft = const padLeft = (value: unknown, strLength: number, chr: string = '0'): string => {
    const val = String(value);
    const len = strLength - val.length;
    return len > 0 ? chr.repeat(len) + val : val;
};"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const padLeft = const padLeft = (value, strLength, chr) => {
    const val = value + '';
    const len = strLength - val.length;
    return len > 0 ? chr.repeat(len) + val : val;
};"
        />
    </div>
</template>
