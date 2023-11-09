<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>[[COMPONENT_NAME]]</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Description
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript">
            Typescript_code
        </FunctionCode>

        <FunctionCode title="Javascript" lang="javascript">
            Javascript_code
        </FunctionCode>

        <FunctionCode title="Example" lang="javascript">
            Example_code
        </FunctionCode>
    </div>
</template>
