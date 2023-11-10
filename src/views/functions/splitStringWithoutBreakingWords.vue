<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = '';
</script>

<template>
    <div class="space-y-8">
        <h1>splitStringWithoutBreakingWords</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white" v-html="description" />
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const splitStringWithoutBreakingWords = (str: string, maxLength: number): string[] => {
    const words = str.split(' ');
    const parts: string[] = [];
    let currentPart = '';

    for (const word of words) {
        if (currentPart.length + word.length <= maxLength) {
            if (currentPart !== '') {
                currentPart += ' ';
            }
            currentPart += word;
        } else {
            parts.push(currentPart);
            currentPart = word;
        }
    }

    if (currentPart !== '') {
        parts.push(currentPart);
    }

    return parts;
};" />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const splitStringWithoutBreakingWords = (str, maxLength) => {
    const words = str.split(' ');
    const parts = [];
    let currentPart = '';

    for (const word of words) {
        if (currentPart.length + word.length <= maxLength) {
            if (currentPart !== '') {
                currentPart += ' ';
            }
            currentPart += word;
        } else {
            parts.push(currentPart);
            currentPart = word;
        }
    }

    if (currentPart !== '') {
        parts.push(currentPart);
    }

    return parts;
};"
        />

        <FunctionCode title="Example" lang="javascript" code="" />
    </div>
</template>
