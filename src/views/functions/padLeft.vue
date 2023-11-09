<script setup>
import FunctionCode from '@/components/FunctionCode.vue';
</script>

<template>
    <div class="space-y-8">
        <h1>padLeft</h1>

        <div>
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white">
                Left pad a string to a certain length with another string.
            </p>
        </div>

        <FunctionCode title="Typescript" lang="typescript">
            const padLeft = const padLeft = (value: unknown, strLength: number, chr: string = '0'): string => {
                const val = String(value);
                const len = strLength - val.length;
                return len > 0 ? chr.repeat(len) + val : val;
            };
        </FunctionCode>

        <FunctionCode title="Javascript" lang="javascript">
            const padLeft = const padLeft = (value, strLength, chr) => {
                const val = value + '';
                const len = strLength - val.length;
                return len > 0 ? chr.repeat(len) + val : val;
            };
        </FunctionCode>
    </div>
</template>
