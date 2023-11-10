<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description = 'Return an object from a submitted form data.';
</script>

<template>
    <div class="space-y-8">
        <h1>getFormData</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify" v-html="description" />
        </div>

        <FunctionCode
            title="Typescript"
            lang="typescript"
            code="const getFormData = &amp;lt;T&amp;gt;(event: Event): T => {
    const formData = new FormData(event.target as HTMLFormElement);
    const object: {[key: string]: unknown} = {};

    formData.forEach((value: unknown, key: string) => object[key] = value);

    return object as T;
};"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const getFormData = (event) => {
    const formData = new FormData(event.target);
    const object   = {};

    formData.forEach((value, key) => object[key] = value);

    return object;
};"
        />
    </div>
</template>
