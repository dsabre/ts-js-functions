<script setup>
import {RouterView} from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <Sidebar />
    <main class="ml-0 sm:ml-64 py-8 px-4">
        <RouterView />
    </main>
</template>
