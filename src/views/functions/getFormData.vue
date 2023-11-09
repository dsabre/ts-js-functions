<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>getFormData</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Return an object from a submitted form data.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="ts">
            const getFormData = &lt;T&gt;(event: Event): T => {
                const formData = new FormData(event.target as HTMLFormElement);
                const object: {[key: string]: unknown} = {};

                formData.forEach((value: unknown, key: string) => object[key] = value);

                return object as T;
            };
        </FunctionCode>

        <FunctionCode title="Javascript" lang="js">
            const getFormData = (event) => {
                const formData = new FormData(event.target);
                const object   = {};

                formData.forEach((value, key) => object[key] = value);

                return object;
            };
        </FunctionCode>
    </div>
</template>
