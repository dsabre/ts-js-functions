<script setup>
import FunctionCode from '@/components/FunctionCode.vue';

const description =
    'Function that takes two arguments - number and defaultRet. It checks whether the given number is NaN (Not a Number) or not, and returns defaultRet if the number is indeed NaN.';
</script>

<template>
    <div class="space-y-8">
        <h1>ifNaN</h1>

        <div v-if="description">
            <h2>Description</h2>
            <p class="text-gray-900 dark:text-white text-justify" v-html="description" />
        </div>

        <FunctionCode
            title="Typescript"
            lang="typescript"
            code="const ifNaN = (number: number, defaultRet: number = 0): number => isNaN(number) ? defaultRet : number;"
        />

        <FunctionCode
            title="Javascript"
            lang="javascript"
            code="const ifNaN = (number, defaultRet = 0) => isNaN(number) ? defaultRet : number;"
        />

        <FunctionCode
            title="Example"
            lang="javascript"
            code="import { ifNaN } from './ifNaN';

const myNumber = 5;
const myNaN = NaN;

const result1 = ifNaN(myNumber); // returns 5
const result2 = ifNaN(myNaN); // returns 0
const result3 = ifNaN(myNaN, 10); // returns 10"
        />
    </div>
</template>
