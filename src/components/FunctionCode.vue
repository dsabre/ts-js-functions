<script setup>
import {nextTick, ref} from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/stackoverflow-dark.css';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const notyf = new Notyf({
    duration: 3000,
    ripple: false,
    dismissible: true,
    position: {
        x: 'right',
        y: 'top'
    }
});
const codeHolder = ref();
const copyCode = () => {
    navigator.clipboard.writeText(props.code.trim());

    notyf.success('Code copied to clipboard');
};

nextTick(() => hljs.highlightElement(codeHolder.value));
</script>

<template>
    <div class="space-y-2">
        <div class="flex justify-between items-center">
            <h2>{{ title }}</h2>
            <button
                @click.prevent="copyCode"
                class="inline-flex justify-center items-center py-2 px-3 sm:py-3 sm:px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                </svg>
                Copy
            </button>
        </div>

        <pre class="text-xs sm:text-sm"><code ref="codeHolder" :class="`language-${lang}`" v-html="code"></code></pre>
    </div>
</template>
