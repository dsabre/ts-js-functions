<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>makeId</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Generate and return a random string of a given length.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript" code="const makeId = (length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i &lt; length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};" />

        <FunctionCode title="Javascript" lang="javascript" code="const makeId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i &lt; length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};" />
    </div>
</template>
